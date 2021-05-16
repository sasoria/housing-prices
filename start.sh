#!/usr/bin/env sh
cd "$(dirname "$0")"
pwd
ls -la
ls -la ..
ls -la ../bin
ls -la ../lib
ls -la ../lib/node_modules
ls -la ../lib/node_modules/@sasoria/housing-prices
node --experimental-json-modules ./cli.js $1 $2