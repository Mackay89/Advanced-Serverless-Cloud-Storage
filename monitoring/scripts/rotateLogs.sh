#!/bin/bash

LOGS_DIR="./logs"
ARCHIVE_DIR="./logs/archive"

mkdir -p $ARCHIVE_DIR

# Archive logs
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
tar -czf "$ARCHIVE_DIR/audit_$TIMESTAMP.tar.gz" $LOGS_DIR/audit.log

# Clear current log file
> $LOGS_DIR/audit.log

echo "Logs rotated and archived to $ARCHIVE_DIR."

