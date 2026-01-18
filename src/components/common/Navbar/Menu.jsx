import { NavLink } from 'react-router';
import useAuth from '../../../hook/useAuth';

export default function Menu() {
  const { user } = useAuth();
  return (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={'/my-apply-job'}>My Apply job list</NavLink>
          </li>
          <li>
            <NavLink to={'/job-post'}>Job Post</NavLink>
          </li>
        </>
      ) : (
        ''
      )}
    </>
  );
}
