import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import useAuth from '../hook/useAuth';
import { deleteMyPostedJob, getAllJobs } from '../utils/api';

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

  const successNotify = () =>
    toast.success('Delete successful!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });

  const handleDelete = async (id) => {
    const res = await deleteMyPostedJob(id);
    if (res) {
      successNotify();
    }
    const remainingJobs = jobs.filter((job) => job._id !== id);
    setJobs(remainingJobs);
  };
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs
              .filter((job) => job.createdMail === user?.email)
              .map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.category}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="btn bg-[red] text-white btn-sm"
                    >
                      Delete
                    </button>
                    <button className="btn bg-[blue] text-white btn-sm ml-2">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
