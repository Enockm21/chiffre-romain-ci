#!/usr/bin/env bash

git pull
#npm install
#npm run build
npm test
if [ $? -eq 0 ]; then
  echo "Tests passed"
 
else

  current_date=$(date "+%F-%Hh-%Mm-%Ss")
  git branch "failures/$current_date"
  #git reset HEAD~1
  echo "Test failed"
 # exit 1
fi
