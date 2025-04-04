#!/bin/bash

# Set NVM install directory
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

# Clone the NVM repository
git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"

# Checkout the latest stable release
cd "$NVM_DIR"
git checkout $(git describe --abbrev=0 --tags)

# Load NVM into current shell
. "$NVM_DIR/nvm.sh"

# Optionally confirm
command -v nvm
