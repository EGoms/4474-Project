# 4474-Project

# Git commands
git clone \<git or https link\> (download the repo)

## Branching
See all the branches: `git branch -a`

Change to a branch: `git checkout branchname`

Create a local copy of remote branch: `git checkout -t origin/branchname`

Create a new branch locally: `git checkout -b branchname`

Deleting a local branch: `git branch -d branchname`

Deleting a branch on the remote: `git push --delete origin branchname` 

## Changes
Get all changes from remote: `git fetch --all`

Pull the changes from remote to local branch: `git pull` (can get more specific `git pull origin main`)

Add a file that has changes: `git add \<file\>`

Commit the file: `git commit -m "\<message\>"`

Push the changes to the remote: `git push` (can get more specific `git push origin main`)

First time pushing a local branch to remote: `git push -u origin branchname`


# Starting python server

For python3: python -m http.server <port>
For python2: python -m SimpleHTTPServer


