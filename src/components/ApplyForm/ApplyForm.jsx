import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import { applyForJob } from '../../utils/api';

export default function ApplyForm() {
  const id = useParams();
  const { user } = useAuth();
  console.log('ApplyForm job id:', id);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    portfolioUrl: '',
    cvUrl: '',
    linkedInUrl: '',
  });
  const applyJobInfo = {
    jobId: id.id,
    ...formData,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await applyForJob(applyJobInfo);
    console.log(res);
  };
  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              disabled
              name="name"
              onChange={handleChange}
              value={formData.name}
              type="text"
              className="input"
              placeholder="Name"
            />
            <label className="label">portfolioUrl</label>
            <input
              name="portfolioUrl"
              onChange={handleChange}
              value={formData.portfolioUrl}
              type="text"
              className="input"
              placeholder="Portfolio URL"
            />
            <label className="label">Email</label>
            <input
              disabled
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">cvUrl</label>
            <input
              name="cvUrl"
              onChange={handleChange}
              value={formData.cvUrl}
              type="text"
              className="input"
              placeholder="CV URL"
            />
            <label className="label">linkedInUrl</label>
            <input
              name="linkedInUrl"
              onChange={handleChange}
              value={formData.linkedInUrl}
              type="text"
              className="input"
              placeholder="LinkedIn URL"
            />
            {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                  </div> */}
            <button className="btn btn-neutral mt-4">Apply</button>
          </form>
        </div>
      </div>
    </>
  );
}
