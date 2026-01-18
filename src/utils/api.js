import axios from 'axios';

export const addJob = async (jobInfo) => {
  const response = await axios.post(`http://localhost:5000/jobs`, jobInfo);
  return response.data.data;
};

export const getAllJobs = async () => {
  const response = await axios.get(`http://localhost:5000/jobs`);
  return response.data.data;
};

export const getSingleJobs = async (id) => {
  const response = await axios.get(`http://localhost:5000/jobs/${id}`);
  return response.data.data;
};

export const applyForJob = async (applicationData) => {
  const response = await axios.post(
    `http://localhost:5000/applyJob`,
    applicationData
  );
  return response.data.data;
};

export const getMyApplications = async (userEmail) => {
  const response = await axios.get(
    `http://localhost:5000/applyJob?email=${userEmail}`
  );
  return response.data.data;
};
