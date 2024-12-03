-- Cassandra configuration for distributed metadata storage
CREATE KEYSPACE IF NOT EXISTS metadata_store
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE metadata_store;

CREATE TABLE IF NOT EXISTS file_metadata (
    file_id UUID PRIMARY KEY,
    file_name TEXT,
    upload_date TIMESTAMP,
    owner TEXT,
    tags LIST<TEXT>
);

CREATE TABLE IF NOT EXISTS user_activity (
    user_id UUID,
    action TEXT,
    timestamp TIMESTAMP,
    PRIMARY KEY (user_id, timestamp)
);

