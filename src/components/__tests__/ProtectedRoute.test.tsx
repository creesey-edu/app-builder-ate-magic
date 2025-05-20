
// src/components/__tests__/ProtectedRoute.test.tsx

import React, { ReactElement } from "react";
import { describe, it, expect, vi, beforeEach, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { VerificationType } from "../../types/discord";
import "@testing-library/jest-dom";

let ProtectedRoute: typeof import("../auth/ProtectedRoute").default;

// 🔐 ENV Setup FIRST
beforeAll(async () => {
  vi.stubGlobal("import.meta", {
    env: {
      VITE_ADMIN_SERVER_GUILD_ID: "guild123",
      VITE_ADMIN_ROLE_ID: "adminRole",
      VITE_VERIFIED_USER_ROLE_ID: "verifiedRole",
    },
  });

  ProtectedRoute = (await import("../auth/ProtectedRoute")).default;
});

// Mock useSession
vi.mock("../../hooks/useSession", () => ({
  useSession: vi.fn(),
}));
import { useSession } from "../../hooks/useSession";

// Mock components
const MockComponent = () => <div>Protected Content</div>;
const Signin = () => <div>Signin Page</div>;
const Unauthorized = () => <div>Unauthorized Page</div>;
const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};

const renderWithRoutes = (ui: ReactElement, initialPath = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/" element={ui} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<LocationDisplay />} />
      </Routes>
    </MemoryRouter>
  );
};

const mockUseSession = (overrides: Partial<ReturnType<typeof useSession>>) => {
  (useSession as any).mockReturnValue({
    isAuthenticated: false,
    isAdmin: false,
    isVerified: false,
    isLoading: false,
    user: null,
    ...overrides,
  });
};

describe("ProtectedRoute", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("TC-001 - redirects to /signin if unauthenticated", () => {
    mockUseSession({ isAuthenticated: false });

    renderWithRoutes(<ProtectedRoute><MockComponent /></ProtectedRoute>);
    expect(screen.getByText("Signin Page")).toBeInTheDocument();
  });

  it("TC-002 - redirects to /unauthorized if not admin", () => {
    mockUseSession({
      isAuthenticated: true,
      user: {
        id: "u1",
        username: "TestUser",
        isAdminGuildOwner: false,
        isAdminGuildAdministrator: false,
        isAdminGuildModerator: false,
        isAdminGuildVerifiedMember: false,
        isAdminGuildMember: false,
        isCommunityGuild: false,
        isCommunityGuildOwner: false,
        isCommunityGuildManager: false,
        isCommunityGuildAdministrator: false,
        isCommunityGuildModerator: false,
        isCommunityGuildVerifiedMember: false,
        isCommunityGuildMember: false,
        verificationType: VerificationType.EDUCATION,
        guilds: [{ id: "guild123", name: "Test Guild", roles: ["basicRole"] }],
      },
    });

    renderWithRoutes(<ProtectedRoute requireAdmin><MockComponent /></ProtectedRoute>);
    expect(screen.getByText("Unauthorized Page")).toBeInTheDocument();
  });

  it("TC-003 - redirects to /unauthorized if not verified", () => {
    mockUseSession({
      isAuthenticated: true,
      user: {
        id: "u1",
        username: "TestUser",
        isAdminGuildOwner: true,
        isAdminGuildAdministrator: false,
        isAdminGuildModerator: false,
        isAdminGuildVerifiedMember: false,
        isAdminGuildMember: true,
        isCommunityGuild: false,
        isCommunityGuildOwner: false,
        isCommunityGuildManager: false,
        isCommunityGuildAdministrator: false,
        isCommunityGuildModerator: false,
        isCommunityGuildVerifiedMember: false,
        isCommunityGuildMember: false,
        verificationType: null,
        guilds: [{ id: "guild123", name: "Test Guild", roles: ["adminRole"] }],
      },
    });

    renderWithRoutes(<ProtectedRoute requireVerified><MockComponent /></ProtectedRoute>);
    expect(screen.getByText("Unauthorized Page")).toBeInTheDocument();
  });

  it("TC-004 - redirects to /unauthorized if missing required role", () => {
    mockUseSession({
      isAuthenticated: true,
      user: {
        id: "u1",
        username: "TestUser",
        isAdminGuildOwner: true,
        isAdminGuildAdministrator: false,
        isAdminGuildModerator: false,
        isAdminGuildVerifiedMember: false,
        isAdminGuildMember: true,
        isCommunityGuild: false,
        isCommunityGuildOwner: false,
        isCommunityGuildManager: false,
        isCommunityGuildAdministrator: false,
        isCommunityGuildModerator: false,
        isCommunityGuildVerifiedMember: false,
        isCommunityGuildMember: false,
        verificationType: VerificationType.GOVERNMENT,
        guilds: [{ id: "guild123", name: "Test Guild", roles: ["adminRole"] }],
      },
    });

    renderWithRoutes(<ProtectedRoute requireRoleId="nonexistent"><MockComponent /></ProtectedRoute>);
    expect(screen.getByText("Unauthorized Page")).toBeInTheDocument();
  });

  it("TC-005 - renders children when all checks pass", async () => {
    vi.resetModules();
    vi.stubGlobal("import.meta", {
      env: {
        VITE_ADMIN_SERVER_GUILD_ID: "guild123",
        VITE_ADMIN_ROLE_ID: "adminRole",
        VITE_VERIFIED_USER_ROLE_ID: "verifiedRole",
      },
    });

    const { default: ProtectedRoute } = await import("../auth/ProtectedRoute");

    const mockUser = {
      id: "user123",
      username: "TestUser",
      isAdminGuildOwner: true,
      isAdminGuildAdministrator: true,
      isAdminGuildModerator: true,
      isAdminGuildVerifiedMember: true,
      isAdminGuildMember: true,
      isCommunityGuild: false,
      isCommunityGuildOwner: false,
      isCommunityGuildManager: false,
      isCommunityGuildAdministrator: false,
      isCommunityGuildModerator: false,
      isCommunityGuildVerifiedMember: false,
      isCommunityGuildMember: false,
      verificationType: VerificationType.EDUCATION,
      guilds: [
        {
          id: "guild123",
          name: "Admin Guild",
          roles: ["adminRole", "verifiedRole"],
        },
      ],
    };

    mockUseSession({
      isAuthenticated: true,
      isAdmin: true,
      isVerified: true,
      user: mockUser,
    });

    renderWithRoutes(
      <ProtectedRoute requireAdmin requireVerified requireRoleId="adminRole">
        <MockComponent />
      </ProtectedRoute>
    );

    expect(screen.getByText("Protected Content")).toBeInTheDocument();
  });

  it("TC-006 - shows loading screen while session is loading", () => {
    mockUseSession({ isLoading: true });

    renderWithRoutes(<ProtectedRoute><MockComponent /></ProtectedRoute>);
    expect(screen.getByText("Verifying session...")).toBeInTheDocument();
  });
});
