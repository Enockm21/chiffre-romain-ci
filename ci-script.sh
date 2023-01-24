#!/usr/bin/env bash

npm test
if [ $? -eq 0 ]; then
  echo "Tests passed"
  # Deploy the code to the production server
  #//git push production development:master
else
  
  current_date=$(date "+%F-%Hh-%Mm-%Ss")
  git branch "failures/$current_date"
  #git reset HEAD~1
  echo "Test failed"
  exit 1
fi
