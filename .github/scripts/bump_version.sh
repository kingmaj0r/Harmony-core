#!/bin/bash

version=$(node -p "require('./package.json').version")
latest_release=$(gh release list --limit 1 --json tagName --jq '.[0].tag_name')

if [ -z "$latest_release" ]; then
  major=$(echo $version | cut -d. -f1)
  minor=$(echo $version | cut -d. -f2)
  patch=$(echo $version | cut -d. -f3)
  ((patch++))
  if [ $patch -eq 100 ]; then
    patch=0
    ((minor++))
    if [ $minor -eq 10 ]; then
      minor=0
      ((major++))
    fi
  fi
  new_version="$major.$minor.$patch"
else
  # Extract the version number from the latest release tag
  latest_version=$(echo $latest_release | cut -d'v' -f2)
  major_latest=$(echo $latest_version | cut -d. -f1)
  minor_latest=$(echo $latest_version | cut -d. -f2)
  patch_latest=$(echo $latest_version | cut -d. -f3)

  major=$(echo $version | cut -d. -f1)
  minor=$(echo $version | cut -d. -f2)
  patch=$(echo $version | cut -d. -f3)

  # Increment the version based on the latest release
  if (( major > major_latest )); then
    major=$((major + 1))
    minor=0
    patch=0
  elif (( major == major_latest && minor > minor_latest )); then
    minor=$((minor + 1))
    patch=0
  elif (( major == major_latest && minor == minor_latest && patch >= patch_latest )); then
    echo "Error: Version $version is equal to or lower than the latest release ($latest_release)."
    exit 1
  else
    ((patch++))
  fi

  new_version="$major.$minor.$patch"
fi

echo $new_version