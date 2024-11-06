import { NavLink, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const Navbar = () => {
  const { isAuthenticated, role, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <>
      <div className='text-gray-900 font-roboto text-2xl border-b shadow-md'>
        <header className='container mx-auto px-9 py-6'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>

              {!isAuthenticated && (
                 <NavLink to='/' className='text-2xl hover:text-gray-500'>
                 RD
               </NavLink>
              )}
             
            </div>
            <div className='flex space-x-4 ml-auto'>
              {isAuthenticated ? (
                <>
                  <span className='px-2 text-red-800'> {role}</span>
                  <button onClick={handleLogout} className='px-2 hover:text-gray-500'>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to='/login' className='px-2 hover:text-gray-500'>
                    Log in
                  </NavLink>
                  <NavLink to='/signup' className='px-2 hover:text-gray-500'>
                    Sign up
                  </NavLink>
                </>
              )}
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
