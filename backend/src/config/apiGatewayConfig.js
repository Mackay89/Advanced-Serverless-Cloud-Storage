module.exports = {
  apiVersion: '1.0',
  basePath: '/api/v1',
  routes: [
    { path: '/files/upload', method: 'POST' },
    { path: '/files/download/:fileId', method: 'GET' },
    { path: '/users/create', method: 'POST' },
    { path: '/auth/token', method: 'POST' },
  ],
};

