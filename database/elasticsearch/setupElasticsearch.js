const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://localhost:9200' });

async function setupElasticsearch() {
  try {
    // Create index for file metadata
    await client.indices.create({
      index: 'file_metadata',
      body: {
        mappings: {
          properties: {
            file_name: { type: 'text' },
            owner: { type: 'keyword' },
            tags: { type: 'keyword' },
            upload_date: { type: 'date' }
          }
        }
      }
    });

    console.log('Elasticsearch setup completed.');
  } catch (error) {
    console.error('Error setting up Elasticsearch:', error);
  }
}

setupElasticsearch();

