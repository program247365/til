---
title: "Using Git Worktree"
date: 2022-03-17
tag: git
---

This is a short intro to [Git Worktree](https://git-scm.com/docs/git-worktree) that I posted to my work Slack at the time. I was so excited to find out about it after I felt like using git a long time.

It's quite a wonderful git feature you should check out.

```
# git worktree??? Who dis???

git worktree list

# create a new branch

git worktree add MAR-2619 ~/code/acv/acv-web-vuejs-mar2619 master

ls -l ~/code/acv

cd ~/code/acv/acv-web-vuejs-mar2619

ls

# it's the whole project checked out at HEAD in this directory! No more stashing!

git worktree list

# that's cool!!!! Linked to the same git repo, you have a physical copy/directory to work in

# you can have your repo checked out at different commits as a directory

# :mindblown:

 kevinridgway@acv-web-vuejs on  master [$] via ⬢ v16.13.2  ┌────────────────────────────────────────────── └─>
git worktree add ../lodash-branch MAR-3106-tree-shaking-lodash-per-function
Preparing worktree (checking out 'MAR-3106-tree-shaking-lodash-per-function')
HEAD is now at 3b5f21bd1 Merge refs/heads/master into MAR-3106-tree-shaking-lodash-per-function
 kevinridgway@acv-web-vuejs on  master [$] via ⬢ v16.13.2  ┌────────────────────────────────────────────── └─>
git worktree list
/Users/kevinridgway/code/acv/acv-web-vuejs  e1942da2f [master]
/Users/kevinridgway/code/acv/lodash-branch  3b5f21bd1 [MAR-3106-tree-shaking-lodash-per-function]

 kevinridgway@lodash-branch on  MAR-3106-tree-shaking-lodash-per-function [$] via ⬢ v16.13.2  ┌────────────────────────────────────────────── └─>
pwd
/Users/kevinridgway/code/acv/lodash-branch

```
