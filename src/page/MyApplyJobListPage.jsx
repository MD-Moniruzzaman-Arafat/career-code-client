import { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import { getMyApplications } from '../utils/api';

export default function MyApplyJobListPage() {
  const [applications, setApplications] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const loadData = async () => {
      const res = await getMyApplications(user.email);
      console.log('User email:', res);
      setApplications(res);
    };
    loadData();
  }, [user.email]);
  console.log(applications);
  return (
    <>
      <h1 className="text-center font-bold underline my-10">
        My Apply Job List
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job Id</th>
              <th>LinkedinUrl</th>
              <th>portfolioUrl</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.name}</td>
                <td>{application.jobId}</td>
                <td>{application.linkedInUrl}</td>
                <td>{application.portfolioUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
