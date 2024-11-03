import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='text-gray-900 font-roboto text-2xl border-b shadow-md'>
        <header className='container mx-auto px-9 py-6'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <NavLink to='/' className='text-2xl hover:text-gray-500'>
                RD
              </NavLink>
            </div>
            <div className='flex space-x-4 ml-auto'>
              <NavLink to='/login' className='px-2 hover:text-gray-500'>
                Log in
              </NavLink>
              <NavLink to='/signup' className='px-2 hover:text-gray-500'>
                Sign up
              </NavLink>
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
