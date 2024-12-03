import axios from 'axios';

const API_BASE_URL = 'https://api.your-cloud-storage.com';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

