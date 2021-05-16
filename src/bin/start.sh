#!/usr/bin/env sh
cd "$(dirname "$0")"
pwd
node --experimental-json-modules ../cli.js $1 $2