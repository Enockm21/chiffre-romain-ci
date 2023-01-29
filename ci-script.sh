#!/usr/bin/env bash

# pour être sûr de tester notre pull sur develop
git checkout develop
git pull
npm install
npm run build
npm test
if [ $? -eq 0 ]; then
  git rebase develop main
  git push
  echo "Tests passed"

 
else
  #récupère la date pour créer la branche failure
  current_date=$(date "+%F-%Hh-%Mm-%Ss")

  git branch "failures/$current_date"

  #publication de la nouvelle branche failure sur le repository  en remote (github/gitlab)
  git push --all -u

  #suppression du dernier commit récupéré en pull 
  git reset HEAD~1

  #suppression des modifications
  git restore .

  #Mise à jour du repo en remote
  git push -f
  echo "Test failed"
  exit 1
fi
