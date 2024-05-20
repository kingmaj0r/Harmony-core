#!/bin/bash

set -e

LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "0.0.0")

MAJOR=$(echo $LATEST_TAG | sed 's/\([0-9]*\)\.\([0-9]*\)\.\([0-9]*\)/\1/')
MINOR=$(echo $LATEST_TAG | sed 's/\([0-9]*\)\.\([0-9]*\)\.\([0-9]*\)/\2/')
PATCH=$(echo $LATEST_TAG | sed 's/\([0-9]*\)\.\([0-9]*\)\.\([0-9]*\)/\3/')

if [ -z "$LATEST_TAG" ]; then
  NEW_MAJOR=0
  NEW_MINOR=0
  NEW_PATCH=1
else
  NEW_MAJOR=$MAJOR
  NEW_MINOR=$MINOR
  NEW_PATCH=$((PATCH + 1))
fi

NEW_VERSION="$NEW_MAJOR.$NEW_MINOR.$NEW_PATCH"
jq --arg version "$NEW_VERSION" '.version = $version' package.json > package.json.tmp && mv package.json.tmp package.json