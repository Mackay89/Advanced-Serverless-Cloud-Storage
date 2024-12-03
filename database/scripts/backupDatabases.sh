#!/bin/bash
# Backup databases
set -e

# Cassandra backup
echo "Backing up Cassandra..."
nodetool snapshot metadata_store

# MongoDB backup
echo "Backing up MongoDB..."
mongodump --uri="mongodb://localhost:27017" --out=/backups/mongo_backup

# Elasticsearch backup
echo "Backing up Elasticsearch..."
curl -X PUT "localhost:9200/_snapshot/backup_repo" -H 'Content-Type: application/json' -d'
{
  "type": "fs",
  "settings": {
    "location": "/backups/elasticsearch"
  }
}'
echo "Backup completed."

