#!/bin/bash

rsync -az --delete --exclude=".git" --exclude="update.sh" ../test-pwa/build/default/ .
git add -A && git cm -m "-" && git push origin gh-pages

