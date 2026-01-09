import axios from 'axios';

export const getAllJobs = async () => {
  const response = await axios.get(`http://localhost:5000/jobs`);
  return response.data.data;
};
