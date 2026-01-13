import { Link, useLoaderData } from 'react-router';

export default function JobsDetailsPage() {
  const jobDetails = useLoaderData();
  console.log(jobDetails);
  return (
    <>
      <div className="p-8 border rounded-lg shadow-md my-5">
        <img src={jobDetails.company_logo} alt={jobDetails.company} />
      </div>
      <h1 className="text-2xl">
        <span className="font-bold">Status: </span>
        {jobDetails.status}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Title: </span>
        {jobDetails.title}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Company: </span>
        {jobDetails.company}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Category: </span>
        {jobDetails.category}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">HR Name: </span>
        {jobDetails.hr_name}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">HR Email: </span>
        {jobDetails.hr_email}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Job Type: </span>
        {jobDetails.jobType}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Location: </span>
        {jobDetails.location}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Requirements: </span>
        {jobDetails.requirements.join(', ')}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Responsibilities: </span>
        {jobDetails.responsibilities.join(', ')}
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">salaryRange: </span>
        {jobDetails.salaryRange.min} BDT - {jobDetails.salaryRange.max} BDT
      </h1>
      <h1 className="text-2xl">
        <span className="font-bold">Description: </span>
        {jobDetails.description}
      </h1>
      <Link
        to={`/apply-form/${jobDetails._id}`}
        className="bg-blue-500 text-white btn my-5"
      >
        Apply
      </Link>
    </>
  );
}
