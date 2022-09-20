#This script is created to facilitate the homework delivery.
#This script is written and tested by Alexandru Chindris.
#Created on 14 december 2021.    Last update: 15 december 2021.
#!/bin/bash

echo "The script is running... "
git pull
echo "Are you sure to update all your local edits on the github folder [Y]/[N]:"
read choose
case $choose in
     Y | y)git add . 
           echo "Add a commit for your push: "
           read commit 
           git commit -m "$commit" 
           git push 
           git status 
           echo "The script has ended whit success! Check the changes whit (git log)." 
           echo "Bye!";;
     N | n)
           echo "The script has ended" ;;
     *)
      echo " The script has ended, you haven't choose." ;;
esac