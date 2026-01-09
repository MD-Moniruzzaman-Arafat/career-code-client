export default function Card({ job }) {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure className="bg-gray-500">
          <img src={job.company_logo} alt={job.company} className="w-20" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{job.description.slice(0, 100)}...</p>
          <p>
            <span className="font-bold">category:</span> {job.category}
          </p>
          <div className="card-actions justify-start flex-wrap gap-2">
            <span className="font-bold">requirements:</span>
            {job.requirements.map((req, index) => (
              <div key={index} className="badge badge-outline">
                {req}
              </div>
            ))}
          </div>
          <button className="btn btn-active mt-5">Details</button>
        </div>
      </div>
    </>
  );
}
