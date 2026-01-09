import { useEffect, useState } from 'react';
import { getAllJobs } from '../../utils/api';
import Card from '../Card/Card';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getAllJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);
  return (
    <>
      <h1 className="text-4xl text-center font-bold">JOBS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {jobs.map((job) => (
          <Card key={job._id} job={job} />
        ))}
      </div>
    </>
  );
}
