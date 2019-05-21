#!/usr/bin/env bash

UPDATE_FILE="updated_files"

set -e

cd "${0%/*}/../" || exit 1

if ! command -v "npm" > /dev/null; then
  echo "npm not found. Exiting."
  exit 1
fi

if ! npm whoami > /dev/null; then
  echo "Error while checking npm authentication"
  exit 1
fi

while IFS= read -r DIR; do
  (
    cd "./schemas/${DIR}" || exit 1
    npm publish --access=public
  )
done < "${UPDATE_FILE}"
