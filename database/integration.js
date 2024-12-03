const cassandra = require('cassandra-driver');
const { MongoClient } = require('mongodb');
const { Client } = require('@elastic/elasticsearch');

const config = require('./config/dbConfig.json');

(async () => {
  console.log('Connecting to databases...');

  // Connect to Cassandra
  const cassandraClient = new cassandra.Client({
    contactPoints: [config.cassandra.host],
    localDataCenter: 'datacenter1',
    keyspace: config.cassandra.keyspace
  });

  // Connect to MongoDB
  const mongoClient = new MongoClient(config.mongo.uri);
  await mongoClient.connect();
  const mongoDb = mongoClient.db(config.mongo.database);

  // Connect to Elasticsearch
  const esClient = new Client({ node: config.elasticsearch.node });

  console.log('Connections established successfully.');

  // Example operation
  const metadata = {
    file_name: 'example.txt',
    owner: 'user123',
    tags: ['example', 'test'],
    upload_date: new Date().toISOString()
  };

  await esClient.index({ index: config.elasticsearch.index, document: metadata });
  console.log('Metadata indexed in Elasticsearch.');
})();

