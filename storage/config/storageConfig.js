module.exports = {
  minio: {
    endpoint: '127.0.0.1',
    port: 9000,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
    useSSL: false,
  },
  ipfs: {
    repo: './ipfsRepo',
    start: true,
    EXPERIMENTAL: { pubsub: true },
  },
  encryption: {
    key: 'your-secure-key-here',
  },
};

