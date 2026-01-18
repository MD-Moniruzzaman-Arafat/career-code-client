import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { addJob } from '../../utils/api';

export default function AddJobForm() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: '',
    category: '',
    applicationDeadline: '',
    salaryRange: { min: '', max: '', currency: '' },
    description: '',
    company: '',
    requirements: [],
    responsibilities: [],
    status: '',
    hr_email: '',
    hr_name: '',
    companyLogo: '',
  });

  const successNotify = () =>
    toast.success('post successful!', {
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
    setFormData({ ...formData, ...formData.salaryRange, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Adding job:', formData);
    const res = await addJob(formData);
    if (res) {
      successNotify();
    }
    console.log(res);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Add New Job</legend>
        <label className="label">Title</label>
        <input
          name="title"
          onChange={handleChange}
          value={formData.title}
          type="text"
          className="input"
          placeholder="Title"
        />
        <label className="label">Location</label>
        <input
          name="location"
          onChange={handleChange}
          value={formData.location}
          type="text"
          className="input"
          placeholder="Location"
        />
        <label className="label">Job Type</label>
        <select
          name="jobType"
          onChange={handleChange}
          value={formData.jobType}
          className="select appearance-none"
        >
          <option>Pick a job type</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>
        <label className="label">Category</label>
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
          className="select appearance-none"
        >
          <option>Pick a category</option>
          <option value="Technology">Technology</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
        </select>
        <label className="label">Application Deadline</label>
        <input
          name="applicationDeadline"
          onChange={handleChange}
          value={formData.applicationDeadline}
          type="date"
          className="input"
        />
        <label className="label">Salary Range</label>
        <div className="flex items-center justify-center gap-2">
          <div>
            <label className="label">min</label>
            <input
              name="min"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  salaryRange: {
                    ...formData.salaryRange,
                    min: e.target.value,
                  },
                });
              }}
              value={formData.salaryRange.min}
              type="text"
              className="input"
              placeholder="min"
            />
          </div>
          <div>
            <label className="label">max</label>
            <input
              name="max"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  salaryRange: {
                    ...formData.salaryRange,
                    max: e.target.value,
                  },
                });
              }}
              value={formData.salaryRange.max}
              type="text"
              className="input"
              placeholder="max"
            />
          </div>
          <div>
            <label className="label">currency</label>
            <select
              name="currency"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  salaryRange: {
                    ...formData.salaryRange,
                    currency: e.target.value,
                  },
                });
              }}
              value={formData.salaryRange.currency}
              className="select appearance-none"
            >
              <option>Pick a currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            className="textarea h-24"
            placeholder="description"
          ></textarea>
        </fieldset>
        <label className="label">company</label>
        <input
          name="company"
          onChange={handleChange}
          value={formData.company}
          type="text"
          className="input"
          placeholder="Company"
        />
        <label className="label">requirements</label>
        <input
          name="requirements"
          onChange={(e) => {
            setFormData({
              ...formData,
              requirements: e.target.value
                .split(',')
                .map((item) => item.trim()),
            });
          }}
          value={formData.requirements}
          type="text"
          className="input"
          placeholder="Requirements"
        />

        <label className="label">responsibilities</label>
        <input
          name="responsibilities"
          onChange={(e) => {
            setFormData({
              ...formData,
              responsibilities: e.target.value
                .split(',')
                .map((item) => item.trim()),
            });
          }}
          value={formData.responsibilities}
          type="text"
          className="input"
          placeholder="Responsibilities"
        />

        <label className="label">Status</label>
        <select
          name="status"
          onChange={handleChange}
          value={formData.status}
          className="select appearance-none"
        >
          <option>Pick a status</option>
          <option value="active">active</option>
          <option value="Closed">Closed</option>
        </select>

        <label className="label">HR Email</label>
        <input
          name="hr_email"
          onChange={handleChange}
          value={formData.hr_email}
          type="email"
          className="input"
          placeholder="HR Email"
        />

        <label className="label">HR Name</label>
        <input
          name="hr_name"
          onChange={handleChange}
          value={formData.hr_name}
          type="text"
          className="input"
          placeholder="HR Name"
        />

        <label className="label">Company Logo</label>
        <input
          name="companyLogo"
          onChange={handleChange}
          value={formData.companyLogo}
          type="text"
          className="input"
          placeholder="Company Logo URL"
        />

        <button className="btn btn-neutral mt-4">Add Job</button>
      </form>
    </>
  );
}
