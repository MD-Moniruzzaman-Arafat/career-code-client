import { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import { getAllJobs } from '../utils/api';

export default function MyPostedJobListPage() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const getAllJob = async () => {
      const res = await getAllJobs();
      setJobs(res);
    };
    getAllJob();
  }, []);
  return (
    <>
      <h1 className="text-center font-bold underline my-10">
        My Posted Job List
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Company</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {jobs
              .filter((job) => job.createdMail === user?.email)
              .map((job, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
