import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AdminDashboard from '../dashboard/AdminDashboard';
import UserDashboard from '../dashboard/UserDashboard';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/user' element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
