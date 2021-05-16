#!/usr/bin/env sh
cd "$(dirname "$0")"
# dir="$(cd $(dirname "$0"); pwd)"

pwd
# ls -la
# ls -la ..
# ls -la ../bin
# ls -la ../lib
# ls -la ../lib/node_modules
# ls -la ../lib/node_modules/@sasoria/housing-prices

node --experimental-json-modules ../lib/node_modules/@sasoria/housing-prices/cli.js $1 $2