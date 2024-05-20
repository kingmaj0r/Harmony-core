#!/bin/bash

version=$(node -p "require('./package.json').version")
latest_release=$(gh release list --limit 1 --json tagName --jq '.[0].tag_name')

if [ -z "$latest_release" ]; then
  major=$(echo $version | cut -d. -f1)
  minor=$(echo $version | cut -d. -f2)
  patch=$(echo $version | cut -d. -f3)
  NEW_VERSION="$major.$minor.$((patch + 1))"
else
  IFS='.' read -ra version_parts <<< "$version"
  IFS='.' read -ra latest_release_parts <<< "$latest_release"

  major=${version_parts[0]}
  minor=${version_parts[1]}
  patch=${version_parts[2]}

  if [ "${latest_release_parts[0]}" -eq "$major" ] && [ "${latest_release_parts[1]}" -eq "$minor" ]; then
    NEW_VERSION="$major.$minor.$((patch + 1))"
  else
    NEW_VERSION="$major.$((minor + 1)).0"
  fi
fi