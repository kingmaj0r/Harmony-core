#!/bin/bash

version=$(node -p "require('./package.json').version")
latest_release=$(gh release list --limit 1 --json tagName --jq '.[0].tag_name')

if [ -z "$latest_release" ]; then
  major=$(echo $version | cut -d. -f1)
  minor=$(echo $version | cut -d. -f2)
  patch=$(echo $version | cut -d. -f3)

  if [ $patch -eq 99 ] && [ $minor -eq 99 ]; then
    new_version="$((major + 1)).0.0"
  elif [ $patch -eq 99 ]; then
    new_version="$major.$((minor + 1)).0"
  else
    new_version="$major.$minor.$((patch + 1))"
  fi
  echo $new_version
else
  new_version=$(node -e "let versionParts = '$version'.split('.'); let major = versionParts[0]; let minor = versionParts[1]; let patch = versionParts[2]; let updatedPatch = parseFloat(patch); if (patch === '99') { updatedPatch = 0; minor = parseInt(minor) + 1; } else { updatedPatch += 0.1; } console.log([major, minor, updatedPatch].join('.'));")
  echo $new_version
fi