import Login from '../components/Login/Login';

export default function LoginPage() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <Login />
        </div>
      </div>
    </>
  );
}
