#!/usr/bin/env sh
cd "$(dirname "$0")"
node --experimental-json-modules ../lib/node_modules/@sasoria/housing-prices/cli.js $1 $2 
