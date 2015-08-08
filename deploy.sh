#!/bin/sh

if [ "$1" = "prod" ]
then
  meteor deploy --settings settings_prod.json danielarrizza.com
elif [ "$1" = "pre-prod" ]
then
  meteor deploy --settings settings_prod.json danielarrizza.meteor.com
else
  echo "Sorry, please type in a valid environment name"
fi
