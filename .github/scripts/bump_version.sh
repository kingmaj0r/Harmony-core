#!/bin/bash

version=$(node -p "require('./package.json').version")
latest_release=$(gh release list --limit 1 --json tagName --jq '.[0].tag_name')

if [ -z "$latest_release" ]; then
  major=$(echo $version | cut -d. -f1)
  minor=$(echo $version | cut -d. -f2)
  patch=$(echo $version | cut -d. -f3)
  new_version="$major.$minor.$((patch + 1))"
else
  new_version=$(node -e "console.log('$version'.split('.').map((v,i) => i===2?parseFloat(v)+0.1:parseInt(v)).join('.'))")
fi