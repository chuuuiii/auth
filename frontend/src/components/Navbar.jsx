import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-700 text-white shadow-md'>
        <header className='container mx-auto px-4 py-3'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <NavLink to='/' className='text-2xl font-semibold hover:text-gray-300'>
                RD
              </NavLink>
              <div>
                <NavLink to='/login' className='px-2 hover:text-gray-300'>Log in</NavLink>
                <NavLink to='/signup' className='px-2 hover:text-gray-300'>Sign up</NavLink>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <main className='container mx-auto px-4 py-6'>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
