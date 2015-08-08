#!/bin/bash
# uploads local mongodb to meteor prod db

# USAGE:
# mongodump -h 127.0.0.1:3001 -d meteor -o db_backup; meteor mongo --url YOUR_APP_URL | xargs ./uploadMeteorDB.sh
# ex: mongodump -h 127.0.0.1:3001 -d meteor -o db_backup; meteor mongo --url mysite.meteor.com  | xargs ./uploadMeteorDB.sh
# to make this file executable type in: chmod +x ./uploadMeteorDB.sh

# sample Mongo URL: mongodb://client-ebcd9311:f559beb5-2e52-38dd-bff8-a9c46afab08b@production-db-d2.meteor.io:27017/danielarrizza_com
full_url=$1
regex="mongodb:\/\/(.*?):(.*?)@(.*?)\/(.*)"
[[ $full_url =~ $regex ]]
user_name="${BASH_REMATCH[1]}"
password="${BASH_REMATCH[2]}"
url="${BASH_REMATCH[3]}"
database_name="${BASH_REMATCH[4]}"
cd db_backup/meteor
mongorestore -u $user_name -h $url -d $database_name -p $password .
