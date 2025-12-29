import { Link } from 'react-router';

export default function Register() {
  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">PhotoUrl</label>
            <input type="text" className="input" placeholder="PhotoUrl" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                  </div> */}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
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
