import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import useAuth from '../../hook/useAuth';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
  });
  const navigation = useNavigate();
  const { user, setUser, authError, setAuthError, createUser } = useAuth();
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
    toast.success('Registration successful!', {
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
    // Handle registration logic here
    console.log('Registering user:', formData);
    try {
      const response = await createUser(formData.email, formData.password);
      const registeredUser = response.user;
      if (registeredUser) {
        navigation('/login-page');
      }
      console.log(registeredUser);
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
            <label className="label">Name</label>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name}
              type="text"
              className="input"
              placeholder="Name"
            />
            <label className="label">PhotoUrl</label>
            <input
              name="photoUrl"
              onChange={handleChange}
              value={formData.photoUrl}
              type="text"
              className="input"
              placeholder="PhotoUrl"
            />
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
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <div className="text-center">
            <small>
              don't have an account? <Link to="/login-page">Login</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
