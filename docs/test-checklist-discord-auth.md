# ✅ Discord OAuth & Role-Based Access Control Test Checklist

This checklist ensures the login flow, permission logic, and protected routes are functioning as expected.

---

## 🔐 Discord Login Flow

- [ ] Visit `/signin` or the login page
- [ ] Click the “Login with Discord” button
- [ ] You are redirected to Discord OAuth
- [ ] After approving, you are redirected to:  
  `/auth/discord/callback?code=XYZ`
- [ ] The frontend exchanges the code via the backend
- [ ] You see a toast:  
  **"Successfully authenticated with Discord!"**
- [ ] The `user` object is saved in browser localStorage
- [ ] The `user.guilds[].roles[]` contains the expected role IDs
- [ ] You are redirected back to the page you started from (or `/dashboard`)

---

## 🔐 Admin Role Route Protection

### Scenario: Logged in with Admin Role
- [ ] Go to `/admin`
- [ ] You see the Admin page content
- [ ] No unauthorized error is shown

### Scenario: Logged in without Admin Role
- [ ] Go to `/admin`
- [ ] You are redirected to `/unauthorized`
- [ ] You see a friendly access-denied message

### Scenario: Not Logged In
- [ ] Go to `/admin`
- [ ] You are redirected to `/login`

---

## 🧠 Debug & DevTools Checks

- [ ] Check DevTools → `Application` → `localStorage`:
  - Key: `user`
  - Value contains valid user object with `username`, `isAdmin`, `guilds`, etc.
- [ ] Check DevTools → Network tab:
  - `POST /api/auth/discord/token` → returns 200 OK
- [ ] Check DevTools → Console tab:
  - No uncaught exceptions or red errors
- [ ] Verify role permissions using:
  ```ts
  JSON.parse(localStorage.getItem("user")).guilds[0].roles

## 📤 Logout Flow
- [ ]  Click “Logout” (or trigger logout() manually)

- [ ]  localStorage is cleared

- [ ]  You are redirected to /login or homepage

- [ ]  Protected routes now redirect you to /login


✅ If all checks pass, you're ready to roll out additional features like:

TODO - Content Manager Dashboard

TODO - Streamer Permissions

TODO - Role-based navigation menus