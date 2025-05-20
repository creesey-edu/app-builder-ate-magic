// src/hooks/__tests__/useSession.test.tsx

import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { useSession } from "../..//hooks/useSession";
import "@testing-library/jest-dom"; // Ensure matchers like toBeInTheDocument work

// Correct usage of MemoryRouter as a type
// Example type alias if needed for props or custom render wrappers
// type RouterType = typeof MemoryRouter;

const validUser = {
  id: "123",
  username: "tester",
  isAdmin: true,
  isVerified: true,
  verificationType: "military",
  guilds: [{ id: "guild1", name: "Test Guild", roles: ["admin"] }],
};

const validToken = "mocked.jwt.token";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

describe("useSession hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("returns default values when no session is found", () => {
    const { result } = renderHook(() => useSession(), { wrapper });
    expect(result.current.user).toBe(null);
    expect(result.current.token).toBe("");
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isAdmin).toBe(false);
    expect(result.current.isVerified).toBe(false);
    expect(result.current.verificationType).toBe(null);
  });

  it("correctly loads a valid session from localStorage", () => {
    localStorage.setItem("user", JSON.stringify(validUser));
    localStorage.setItem("auth_token", validToken);

    const { result } = renderHook(() => useSession(), { wrapper });

    expect(result.current.user).toEqual(validUser);
    expect(result.current.token).toBe(validToken);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.isAdmin).toBe(true);
    expect(result.current.isVerified).toBe(true);
    expect(result.current.verificationType).toBe("military");
  });

  it("gracefully handles corrupt localStorage.user (invalid JSON)", () => {
    localStorage.setItem("user", "this-is-not-json");
    localStorage.setItem("auth_token", validToken);

    const { result } = renderHook(() => useSession(), { wrapper });

    expect(result.current.user).toBe(null);
    expect(result.current.token).toBe("");
    expect(result.current.isAuthenticated).toBe(false);
  });

  it("handles malformed but parseable user object (missing optional fields)", () => {
    const partialUser = { id: "abc", username: "tester" };
    localStorage.setItem("user", JSON.stringify(partialUser));
    localStorage.setItem("auth_token", validToken);

    const { result } = renderHook(() => useSession(), { wrapper });

    expect(result.current.user).toEqual(partialUser);
    expect(result.current.isAdmin).toBe(false);
    expect(result.current.isVerified).toBe(false);
    expect(result.current.verificationType).toBe(null);
  });

  it("sets isAuthenticated only when both token and user are valid", () => {
    const partialUser = { id: "123", username: "test" };
    localStorage.setItem("user", JSON.stringify(partialUser));
    localStorage.setItem("auth_token", validToken);

    const { result } = renderHook(() => useSession(), { wrapper });

    expect(result.current.isAuthenticated).toBe(true);
  });
});
