import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import useAuth from '../../hook/useAuth';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigate();
  const { user, setUser, authError, setAuthError, logInUser } = useAuth();
  const errorNotify = () =>
    toast.error(authError, {
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
  const successNotify = () =>
    toast.success('Login successful!', {
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login user:', formData);
    try {
      const response = await logInUser(formData.email, formData.password);
      const loginUser = response.user;
      if (loginUser) {
        navigation('/');
      }
      console.log(loginUser);
      successNotify();
    } catch (error) {
      setAuthError(error.message);
      errorNotify();
    }
  };
  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              onChange={handleChange}
              value={formData.password}
              type="password"
              className="input"
              placeholder="Password"
            />
            {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                  </div> */}
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <div className="text-center">
            <small>
              don't have an account? <Link to="/register-page">Register</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
