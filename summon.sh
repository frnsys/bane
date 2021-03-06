#!/bin/bash

tput setaf 4
echo -e "\nSUMMONING...\n"
tput setaf 1
cat << EOF
 _____ _____ _____ _____
| __  |  _  |   | |   __|
| __ -|     | | | |   __|
|_____|__|__|_|___|_____|


EOF
tput sgr0

# Submodule loading
git submodule init
git submodule update
git rm --cached app/styles
git rm .gitmodules
rm -rf app/styles/.git
git add app/styles

# Destroying git history
rm -rf .git

# Cleanup
rm summon.sh
rm guide.md
rm readme.md

# Init new git repo
git init

if [[ ! "$(type -P jam)" ]]; then
	echo "Jam was not found on your system."
	echo "Visit jamjs.org and set it up,"
	echo "then run 'jam upgrade' in this directory."
else
	echo "Upgrading Jam packages..."
	jam upgrade
fi

if [[ ! "$(type -P npm)" ]]; then
	echo "npm was not found on your system."
	echo "Visit npmjs.org and set it up,"
	echo "then run 'npm install' in this directory."
else
	echo "Installing npm dependencies..."
	npm install -d
fi

tput setaf 2
cat << EOF

 _____ _____ _____ ____  __ __
| __  |   __|  _  |    \|  |  |
|    -|   __|     |  |  |_   _|
|__|__|_____|__|__|____/  |_|



EOF
tput sgr0