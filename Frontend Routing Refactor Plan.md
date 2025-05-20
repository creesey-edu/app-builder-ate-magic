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


# TAG Auth Server – Frontend/Backend Alignment Guide (v1.1.5)

> **Scope**
> Bring the React/Next.js frontend into *full* parity with the newly‑patched Node/Express backend (v1.1.5).
> This doc is the single source of truth for every source‑level change, env variable addition, and API‑contract tweak now required.  Follow **section order** top‑to‑bottom.

---

## 1  New Runtime Contract

| Key                              | Before                                                                | After (v1.1.5)                       | Notes                                                               |
| -------------------------------- | --------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| **JWT payload**                  | `{ sub, username, isVerified, verificationType, verificationStatus }` | Adds `isOwner: boolean`              | Consumers must treat unknown field defensively (`false` default).   |
| **/api/auth/discord/token**      | Response: `{ token, user }`                                           | Response: `{ token, user, isOwner }` | `isOwner` is computed server‑side via Discord API guild membership. |
| **Auth cookie/localStorage key** | `auth_token`                                                          | unchanged                            | value contains expanded payload                                     |
| **Session context (frontend)**   | `user: { ... }`                                                       | must include `isOwner`               | used for RBAC in UI                                                 |

---

## 2  Backend summary (already merged)

* `src/utils/discord.ts` ➟ added `isOwner` detection & error handling.
* `src/utils/jwt.ts`     ➟ payload now carries `isOwner`.
* `src/middleware/guards.ts` ➟ populates `req.session.isOwner`.

No further backend action required.

---

## 3  Frontend code changes

### 3.1 Environment vars

No new envs required for the browser bundle.  Ensure `.env.local` still forwards
`NEXT_PUBLIC_AUTH_URL`, etc.

### 3.2 Auth API wrapper (`lib/api/auth.ts`)

```ts diff
 export interface AuthResponse {
   token: string;
   user: DiscordProfile;
+  isOwner: boolean; // NEW – v1.1.5
 }
@@
-  return res.json()  as AuthResponse;
+  const json = await res.json();
+  return {
+    ...json,
+    isOwner: !!json.isOwner // defensive cast
+  } as AuthResponse;
```

### 3.3 Session Context (`contexts/SessionContext.tsx`)

```ts diff
 export interface Session {
   user: DiscordProfile | null;
   token: string | null;
   isAuthenticated: boolean;
+  isOwner: boolean; // NEW
 }

-  const [session, setSession] = useState<Session>({ ... , isAuthenticated:false });
+  const [session, setSession] = useState<Session>({
+     user:null,
+     token:null,
+     isAuthenticated:false,
+     isOwner:false
+  });
@@ handleLogin
-   setSession({ user:data.user, token:data.token, isAuthenticated:true });
+   setSession({
+       user:data.user,
+       token:data.token,
+       isAuthenticated:true,
+       isOwner:data.isOwner
+   });
```

### 3.4 JWT decode helper (if used client‑side)

Make sure the helper whitelists `isOwner`:

```ts
interface JwtPayload {
  sub:string;
  username:string;
  isVerified:boolean;
  verificationType:string|null;
  verificationStatus:"pending"|"approved"|"denied";
  isOwner:boolean; // NEW
  exp:number;
  iat:number;
}
```

### 3.5 Role‑based routing/guards

*Guard HOC* (`components/OwnerRoute.tsx`):

```tsx
export default function OwnerRoute({children}:{children:React.ReactNode}){
  const { isOwner, isAuthenticated } = useSession();
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!isOwner)      return <Navigate to="/403" />;
  return <>{children}</>;
}
```

Wrap any admin‑only pages.

### 3.6 UI badges & settings

* Add an **“Owner”** badge next to username when `isOwner` is `true`.
* Show dangerous settings (e.g. user ban panel) only for owners.

### 3.7 Tests

* Jest mocks: extend `mockJwtPayload` with `isOwner`.
* Cypress login helper: `cy.login({ isOwner:true })`.

---

## 4  Shared Types (monorepo or `@/types`)

Create/patch `types/session.d.ts` (single‑source):

```ts
export interface SessionPayload {
  sub:string;
  username:string;
  isVerified:boolean;
  verificationType:"gov"|"mil"|"edu"|null;
  verificationStatus:"pending"|"approved"|"denied";
  isOwner:boolean; // NEW – v1.1.5
}
```

Re‑export across both back‑ and front‑end packages.

---

## 5  Versioning & CI

1. Bump **frontend** package.json ➜ `"version": "1.1.5"` to mirror backend.
2. Add `SESSION_PAYLOAD_VERSION=1.1.5` env if you track token schema.
3. Update GitHub Actions cache keys (`v1.1.5`).

---

## 6  Post‑deployment checklist

* [ ] User login returns JWT where `isOwner` reflects live Discord roles.
* [ ] Normal user still authenticates fine, cannot access owner routes.
* [ ] Owner can reach `/admin`, sees badge.
* [ ] Tokens verify on backend with new claim.
* [ ] All unit/integration tests green.

---

\### Changelog reference

* Backend patches: `utils/discord.ts`, `utils/jwt.ts`, `middleware/guards.ts`  (all **v1.1.5**).
* This doc: `alignment-backend-frontend-changelog-v1.1.5.md`.

> **Next up?**  If everything above is merged, production deploys are safe.  Otherwise ping @Scaraboid with the section needing review.
