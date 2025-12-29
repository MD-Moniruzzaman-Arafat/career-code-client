import Register from '../components/Register/Register';

export default function RegisterPage() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <Register />
        </div>
      </div>
    </>
  );
}
