# FurgotMeNot
Animal Adoptions app/Project 2


https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf

`git checkout -b branch_name` will create a new branch off of whatever branch you are currently on (most likely master) - ‘branch_name’ is whatever you want to call your branch

You want to make all of your changes in your local branch and once you’re satisfied with your changes…`git add . ` to add your changes and then `git commit -m "commit message"`

To merge your changes from your local branch (that you created) to your master branch…

`git checkout master` <= takes you out of your branch and puts you into master

`git merge branch_name` <= that will merge in all the changes that you committed into the branch you created into your master branch. Then you can `git push master` and that will send your changes to github so everyone else can `git pull` your changes into their local branches.
