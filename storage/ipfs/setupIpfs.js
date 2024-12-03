const IPFS = require('ipfs-core');

// Initialize IPFS node
const initIpfsNode = async () => {
  const ipfs = await IPFS.create();
  console.log('IPFS node is ready');
  return ipfs;
};

// Add a file to IPFS
const addFileToIpfs = async (ipfs, filePath) => {
  const { cid } = await ipfs.add({ path: filePath, content: require('fs').readFileSync(filePath) });
  console.log(`File added to IPFS: ${cid}`);
  return cid.toString();
};

// Retrieve a file from IPFS
const getFileFromIpfs = async (ipfs, cid) => {
  const fileChunks = [];
  for await (const chunk of ipfs.cat(cid)) {
    fileChunks.push(chunk);
  }
  return Buffer.concat(fileChunks);
};

module.exports = { initIpfsNode, addFileToIpfs, getFileFromIpfs };

