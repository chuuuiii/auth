import useAuthStore from "../store/useAuthStore";

export default function Signup() {
  const { name, email, password, role, updateField, signup, resetForm } = useAuthStore();

  const handleSignup = (e) => {
    e.preventDefault();
    signup();
    resetForm();
  }

  return (
    <div className="flex flex-col justify-center bg-light-gray px-6 py-12 sm:max-w-md sm:mx-auto">
      <h1 className="text-center font-roboto text-2xl font-semibold">Create Account</h1>
      <div className="bg-white p-6 shadow-md rounded-md">
        <form onSubmit={handleSignup}>
          <div className="space-y-6 font-roboto text-sm">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => updateField('password', e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => updateField('role', e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
