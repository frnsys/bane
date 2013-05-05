#!/bin/bash

tput setaf 4
echo -e "\nPOWERING UP...\n"
tput sgr0

git submodule init
git submodule update
git rm --cached app/styles
git rm .gitmodules
rm -rf app/styles/.git
git add app/styles
rm -rf .git
rm powerup.sh
rm guide.md
rm readme.md
git init

if [[ ! "$(type -P jam)" ]]; then
	echo "Jam was not found on your system."
	echo "Visit jamjs.org and set it up,"
	echo "then run 'jam upgrade' in this directory."
else
	jam upgrade
fi

tput setaf 4
echo -e "\nREADY TO GO.\n"
tput sgr0