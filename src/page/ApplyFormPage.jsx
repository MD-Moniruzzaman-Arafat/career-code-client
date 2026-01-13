import ApplyForm from '../components/ApplyForm/ApplyForm';

export default function ApplyFormPage() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Apply now!</h1>
          </div>
          <ApplyForm />
        </div>
      </div>
    </>
  );
}
