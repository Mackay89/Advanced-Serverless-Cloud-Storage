const Minio = require('minio');

// MinIO client configuration
const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || '127.0.0.1',
  port: parseInt(process.env.MINIO_PORT || 9000),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
  secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin',
});

// Initialize buckets
const initMinioBuckets = async () => {
  const buckets = ['encrypted-files', 'video-processing'];

  for (const bucket of buckets) {
    const exists = await minioClient.bucketExists(bucket).catch(() => false);
    if (!exists) {
      await minioClient.makeBucket(bucket, 'us-east-1');
      console.log(`Bucket "${bucket}" created.`);
    }
  }
};

initMinioBuckets()
  .then(() => console.log('MinIO setup complete.'))
  .catch((error) => console.error('Error during MinIO setup:', error));

module.exports = minioClient;

