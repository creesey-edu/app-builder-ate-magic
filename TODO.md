# TODO — Frontend Logout UI Implementation Plan (v0.0.7+)

## Summary

Now that `logout()` has been implemented and exposed in the `useSession.ts` hook, the next step will be adding a UI element that enables the user to trigger this function from the frontend.

This task has been deferred until after MVP (v0.0.6).

---

## Components Required

### 1. **Global Session Access / Layout Integration**

* Ensure the top-level layout or navigation (e.g., `App.tsx`, `SiteHeader.tsx`, etc.) consumes `useSession()`.
* Dynamically render content based on `isAuthenticated`, `user?.username`, and `logout()`.

### 2. **Logout Button Component**

* A simple reusable component that calls `logout()` from `useSession()`
* Location: Header nav bar or a dropdown under user avatar/profile
* Example file: `src/components/auth/LogoutButton.tsx`

### 3. **Conditional Navigation Rendering**

* If `isAuthenticated`, show:

  * User avatar or name
  * "Log Out" button
  * Possibly a "Dashboard" or "My Account" link
* If not, show:

  * "Log In" or "Sign Up" links

### 4. **Session Redirect Support**

* Optional: Add logic to redirect after logout to a cleaner landing page or `/goodbye` route.

---

## Optional Enhancements (Post-MVP)

* Toast notification on logout (`✅ Already Implemented`)
* Add a logout route handler in frontend routing (e.g., `/logout` that auto-triggers logout)
* Persist login state visually in navbar or side drawer

---

## Status

* [x] `logout()` added to `useSession.ts`
* [ ] Logout button component created
* [ ] Layout header/context updated for dynamic session UI
* [ ] User-specific navigation logic implemented

---

## Target Version

`v0.0.7+` — to be scoped after completion of initial verification and session management alignment.
