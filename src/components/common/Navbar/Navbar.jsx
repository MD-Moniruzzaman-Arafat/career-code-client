import { NavLink } from 'react-router';
import useAuth from '../../../hook/useAuth';
import Menu from './Menu';

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const handleLogOutUser = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <>
      <div className="container mx-auto navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Menu />
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CAREER-CODE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Menu />
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <p onClick={handleLogOutUser}>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to={'/login-page'} className="btn">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}
