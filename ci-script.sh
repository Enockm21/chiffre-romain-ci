#!/usr/bin/env bash

# pour être sûr de faire de tester notre pull sur develop
git checkout develop
git pull
npm install
npm run build
npm test
if [ $? -eq 0 ]; then
  echo "Tests passed"
  git checkout main
  git rebase develop main
 
else

  current_date=$(date "+%F-%Hh-%Mm-%Ss")
  git branch "failures/$current_date"
  git reset HEAD~1
  echo "Test failed"
 # exit 1
fi
