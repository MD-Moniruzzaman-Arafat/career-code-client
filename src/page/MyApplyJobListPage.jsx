import { Suspense, useEffect, useState } from 'react';
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
      <h1>My Apply Job List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {applications.length}
      </Suspense>
    </>
  );
}
