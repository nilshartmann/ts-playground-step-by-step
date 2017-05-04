#!/usr/bin/env bash

BASE=$PWD
echo BASE: $BASE

for i in `find ./code/sandbox -name package.json`; do
    DIR=`dirname $i`

    echo =====================================================================================================
    echo ========================= BUILDING $DIR ...
    echo =====================================================================================================
    cd $DIR
    npm run clean
    npm run dist
    cd $BASE

done;
