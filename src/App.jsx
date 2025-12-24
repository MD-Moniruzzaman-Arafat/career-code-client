import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="h-screen container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
