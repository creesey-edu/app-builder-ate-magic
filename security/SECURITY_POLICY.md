# 🔐 Security Foundation for The Angry Gamer Show Productions

This document outlines the initial groundwork to build a secure development and deployment lifecycle across all applications under The Angry Gamer Show Productions.

---

## 📁 Directory Structure

**Root Directory (`The Angry Gamer Show Productions/`)**
```
The Angry Gamer Show Productions/
├── frontend/
├── auth/
├── docs/
├── security/
│   ├── SECURITY_POLICY.md
│   ├── threat-model.md
│   ├── penetration-test-plan.md
│   ├── tools/
│   │   ├── run-all-scans.sh
│   │   └── README.md
│   ├── static-analysis-configs/
│   │   ├── eslint.base.js
│   │   ├── snyk.config.json
│   └── reports/
```

**Each Application (`frontend/`, `auth/`, etc.)** should include a:
```
SECURITY.md  ← (repo-specific guidance)
.env.example ← (never commit real secrets!)
```

---

## ✅ Root-Level Policies and Plans

### `SECURITY_POLICY.md`
- Defines:
  - Security roles (e.g., ISSO, Lead Dev)
  - Incident reporting process
  - Code review expectations
  - Tools used (Snyk, OWASP ZAP, ESLint, etc.)
  - Dependency update cycle

### `threat-model.md`
- Architecture diagram
- Trust boundaries (e.g., between frontend ⇄ auth ⇄ 3rd-party APIs)
- Identified threats
- Controls in place
- Assets at risk (e.g., user identity, tokens, PII if collected)

### `tools/run-all-scans.sh`
A shell script to:
- Run ESLint
- Run `npm audit` or `snyk test`
- Generate logs to `/security/reports/`

#### Script: `tools/run-all-scans.sh`
```bash
#!/bin/bash

# Create report folder
REPORT_DIR="$(pwd)/security/reports/$(date +%Y-%m-%d)"
mkdir -p "$REPORT_DIR"

# Scan Frontend
echo "
🔍 Scanning frontend..."
cd frontend || exit
npm install
npx eslint . --ext .tsx,.ts > "$REPORT_DIR/frontend-eslint.log"
npm audit --json > "$REPORT_DIR/frontend-npm-audit.json"
cd ..

# Scan Auth
echo "
🔍 Scanning auth..."
cd auth || exit
npm install
npx eslint . --ext .tsx,.ts > "$REPORT_DIR/auth-eslint.log"
npm audit --json > "$REPORT_DIR/auth-npm-audit.json"
cd ..

# Optionally run Snyk if installed
if command -v snyk &> /dev/null; then
  echo "
🚨 Running Snyk scans..."
  snyk test --all-projects --json > "$REPORT_DIR/snyk-report.json"
else
  echo "⚠️  Snyk CLI not found. Skipping."
fi

# Done
echo "
✅ Scan complete. Reports saved in $REPORT_DIR"
```

- Shared `eslint.base.js` for consistency
- `snyk.config.json` for organizational scoping

---

## 🧾 Application-Level Guidance

### `auth/SECURITY.md`
- Use Helmet for secure headers
- Trust proxy settings for rate limiting
- Use `jsonwebtoken` securely (short-lived tokens)
- Secure `.env` token handling
- Confirm OAuth scopes are minimal and necessary

### `frontend/SECURITY.md`
- Use `eslint-plugin-security`
- Avoid dynamic `innerHTML`
- Verify proper CORS usage
- Avoid exposing `.env` values to the browser

---

## 🛡️ CI/CD Recommendations
- Integrate all root-level scripts in GitHub Actions or Azure DevOps
- Add security gates before production deploys
- Auto-run `tools/run-all-scans.sh` on pull requests
- Upload logs to `/security/reports/YYYY-MM-DD/`

---

Would you like to:
- Add a sample security incident response procedure?
- Create a report template for the `/reports/` folder?

