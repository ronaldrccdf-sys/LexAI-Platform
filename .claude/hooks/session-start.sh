#!/bin/bash
set -euo pipefail

# Only run in remote (cloud) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Installing Node.js dependencies..."
cd "${CLAUDE_PROJECT_DIR:-$(pwd)}"
npm install
echo "Dependencies installed successfully."
