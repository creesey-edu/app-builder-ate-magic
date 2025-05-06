**Frontend Routing Refactor Plan (TAG WebApp v0.0.6)**

**Objective:**
Modularize routing logic by extracting route definitions from `main.tsx` into a dedicated `src/routes/index.tsx` file to improve scalability, clarity, and long-term maintainability.

---

### ✅ Phase 1: Setup

1. **Create `src/routes/index.tsx`**

   * Export a `createBrowserRouter()` configuration.
   * Define the full route list (`/`, `/dashboard`, `/verify`, etc.).
   * Use layout wrappers like `RootLayout` or `DashboardLayout`.

2. **Update `main.tsx`**

   * Remove inline `createBrowserRouter` block.
   * Import from `src/routes`:

     ```tsx
     import { router } from "@/routes";
     ```
   * Pass into `RouterProvider`:

     ```tsx
     <RouterProvider router={router} />
     ```

---

### ✅ Phase 2: Layout Audit

3. **Review Layout Wrappers**

   * `RootLayout.tsx`: Ensure `Outlet` is rendered for public routes.
   * `DashboardLayout.tsx`: Used for authenticated routes like `/dashboard`.

4. **Verify Navigation Context**

   * Confirm layouts do not break navigation state or cause reloads.

---

### ✅ Phase 3: Update Affected Components

5. **Component Link Review**

   * [ ] `Header.tsx`
   * [ ] `Sidebar.tsx`
   * [ ] `RoleGuard.tsx`
   * [ ] Any component using `<Link to="/">`, `<Link to="/dashboard">`, etc.

6. **Update any `useNavigate` or `useLocation` calls**

   * [ ] Check login redirect logic.
   * [ ] Confirm session routing doesn't break.

---

### ✅ Phase 4: Testing

7. **Manually Test These Routes**

   * [ ] `/`
   * [ ] `/dashboard`
   * [ ] `/verify`
   * [ ] `/auth/discord/callback`
   * [ ] Fallback `*` route (404)

8. **Validate Session & Guards**

   * [ ] `useSession()` context persists across routes
   * [ ] `logout()` clears state and redirects to `/login`
   * [ ] `RoleGuard` logic remains intact

---

### ✨ Optional Enhancements (Post-Refactor)

* [ ] Add route-level lazy loading (`React.lazy` + `Suspense`)
* [ ] Centralize route paths using a `routes.config.ts`
* [ ] Add `ProtectedRoute` wrapper component
* [ ] Move Discord callback + verification into auth route group

---

**Prepared for Execution**
Planned for next session. Each step should be committed individually with focused commit messages.
