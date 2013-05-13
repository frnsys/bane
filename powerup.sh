#!/bin/bash

tput setaf 4
echo -e "\nPOWERING UP...\n"
tput setaf 1
cat << EOF
 _____ _____ _____ _____
| __  |  _  |   | |   __|
| __ -|     | | | |   __|
|_____|__|__|_|___|_____|


EOF
tput sgr0

grunt &
sleep 1 && open "http://localhost:8989/"
fg