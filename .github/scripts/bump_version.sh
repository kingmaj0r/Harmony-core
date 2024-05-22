#!/bin/bash

version=$(node -p "require('./package.json').version")
latest_release=$(gh release list --limit 1 --json tagName --jq '.[0].tag_name')

if [ -z "$latest_release" ]; then
  IFS='.' read -ra parts <<< "$version"
  major=${parts[0]}
  minor=${parts[1]}
  patch=${parts[2]}
  ((patch++))

  if (( patch > 99 )); then
    patch=0
    ((minor++))

    if (( minor > 9 )); then
      minor=0
      ((major++))
    fi
  fi

  new_version="$major.$minor.$patch"
else
  IFS='v' read -r _ latest_version <<< "$latest_release"
  IFS='.' read -ra latest_parts <<< "$latest_version"

  major=${parts[0]}
  minor=${parts[1]}
  patch=${parts[2]}

  major_latest=${latest_parts[0]}
  minor_latest=${latest_parts[1]}
  patch_latest=${latest_parts[2]}

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