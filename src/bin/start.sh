#!/usr/bin/env sh
cd "$(dirname "$0")"
pwd
ls -la ..
node --experimental-json-modules ../cli.js $1 $2