import axios from 'axios';

export const addJob = async (jobInfo) => {
  const response = await axios.post(
    `https://carrer-code-server-flame.vercel.app/jobs`,
    jobInfo
  );
  return response.data.data;
};

export const getAllJobs = async () => {
  const response = await axios.get(
    `https://carrer-code-server-flame.vercel.app/jobs`
  );
  return response.data.data;
};

export const getSingleJobs = async (id) => {
  const response = await axios.get(
    `https://carrer-code-server-flame.vercel.app/jobs/${id}`,
    {
      withCredentials: true,
    }
  );
  return response.data.data;
};

export const applyForJob = async (applicationData) => {
  const response = await axios.post(
    `https://carrer-code-server-flame.vercel.app/applyJob`,
    applicationData
  );
  return response.data.data;
};

export const getMyApplications = async (userEmail) => {
  const response = await axios.get(
    `https://carrer-code-server-flame.vercel.app/applyJob?email=${userEmail}`
  );
  return response.data.data;
};

export const deleteMyPostedJob = async (id) => {
  const response = await axios.delete(
    `https://carrer-code-server-flame.vercel.app/jobs/${id}`
  );
  return response.data.data;
};

export const editMyPostedJob = async (id, updatedJobInfo) => {
  const response = await axios.patch(
    `https://carrer-code-server-flame.vercel.app/jobs/${id}`,
    updatedJobInfo
  );
  return response.data.data;
};

export const jwtToken = async (email) => {
  const response = await axios.post(
    `https://carrer-code-server-flame.vercel.app/jwt`,
    { email },
    { withCredentials: true }
  );
  return response.data.token;
};
