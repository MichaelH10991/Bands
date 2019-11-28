#!/bin/bash

res=$(npm audit || true)
regexpHigh="([0-9]+ high)"
regexpCrit="([0-9]+ critical)"

echo "$res"

if [[ $res =~ $regexp ]]; then 
    echo "found high vulns. You should fix these."
    exit 0
elif [[ $res =~ $regexpCrit ]]; then
    echo "found high critical vulns. You must fix these."
    exit 0
fi

git push
git push heroku master