#!/bin/bash

tput setaf 4
echo -e "\nSUMMONING...\n"
tput sgr0

grunt &
sleep 1 && open "http://localhost:8989/"
fg