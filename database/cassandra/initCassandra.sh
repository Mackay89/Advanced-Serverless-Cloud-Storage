#!/bin/bash
# Cassandra initialization script
set -e

CQL_FILE="setupCassandra.cql"

echo "Initializing Cassandra with schema..."
cqlsh -f $CQL_FILE
echo "Cassandra setup complete."

