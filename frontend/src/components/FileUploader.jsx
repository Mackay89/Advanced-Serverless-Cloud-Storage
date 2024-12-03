import React, { useState } from 'react';
import { uploadFile } from '../utils/api';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus('Please select a file to upload.');
      return;
    }
    setStatus('Uploading...');
    try {
      const response = await uploadFile(file);
      setStatus(`Upload Successful: ${response.data.message}`);
    } catch (error) {
      setStatus('Upload failed. Please try again.');
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
};

export default FileUploader;

