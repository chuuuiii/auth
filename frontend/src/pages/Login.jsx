import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password, navigate); 
  };

  return (
    <div className="flex flex-col justify-center bg-light-gray px-6 py-12 sm:max-w-md sm:mx-auto">
      <h1 className="text-center font-roboto text-2xl font-semibold">
        Sign in to your account
      </h1>
      <div className="bg-white p-6 shadow-md rounded-md">
        <form onSubmit={handleLogin}>
          <div className="space-y-6 font-roboto text-sm">
            <div>
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
