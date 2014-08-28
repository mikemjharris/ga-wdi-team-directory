#!/bin/bash
git push origin :gh-pages
git branch -D gh-pages
git checkout --orphan gh-pages
git add --all
git commit -m "gh pages setup"
git push origin gh-pages
git checkout master