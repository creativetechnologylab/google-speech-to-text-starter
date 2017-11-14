#!/bin/bash

# In terminal:
# chmod +x setup.sh
# ./setup.sh
# source envvar

CREDS_FILE="test-project-candelete-ca0598dab5fd.json"
# CREDS_FILE="Pipe001-bb1b7e1da223.json"
echo "export GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/${CREDS_FILE}" > envvar
