const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'metadataStore';

async function setupMongo() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Create collections
    await db.createCollection('files', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['file_id', 'file_name', 'owner'],
          properties: {
            file_id: { bsonType: 'string' },
            file_name: { bsonType: 'string' },
            upload_date: { bsonType: 'date' },
            owner: { bsonType: 'string' },
            tags: { bsonType: 'array', items: { bsonType: 'string' } }
          }
        }
      }
    });

    console.log('MongoDB setup completed.');
  } finally {
    await client.close();
  }
}

setupMongo().catch(console.error);

