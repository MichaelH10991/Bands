#!/bin/bash
npm audit
npm audit fix
git push -f
git push heroku master -f
