#!/bin/bash

# Create report folder
REPORT_DIR="$(pwd)/security/reports/$(date +%Y-%m-%d)"
mkdir -p "$REPORT_DIR"

# Scan Frontend
echo "
🔍 Scanning frontend..."
cd frontend || exit
npm install
npx eslint . --ext .tsx,.ts >"$REPORT_DIR/frontend-eslint.log"
npm audit --json >"$REPORT_DIR/frontend-npm-audit.json"
cd ..

# Scan Auth
echo "
🔍 Scanning auth..."
cd auth || exit
npm install
npx eslint . --ext .tsx,.ts >"$REPORT_DIR/auth-eslint.log"
npm audit --json >"$REPORT_DIR/auth-npm-audit.json"
cd ..

# Optionally run Snyk if installed
if command -v snyk &>/dev/null; then
   echo "
🚨 Running Snyk scans..."
   snyk test --all-projects --json >"$REPORT_DIR/snyk-report.json"
else
   echo "⚠️  Snyk CLI not found. Skipping."
fi

# Done
echo "
✅ Scan complete. Reports saved in $REPORT_DIR"
