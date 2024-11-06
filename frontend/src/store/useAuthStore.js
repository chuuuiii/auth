import { toast } from 'react-toastify';
import { create } from 'zustand';
// import { useNavigate } from 'react-router-dom';

const useAuthStore = create((set) => ({
  // Initial form fields
  name: '',
  email: '',
  password: '',
  role: '',
  isAuthenticated: false,

  // Update individual fields
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),

  // Signup function
  signup: async () => {
    const { name, email, password, role } = useAuthStore.getState();

    if (!name || !email || !password || !role) {
      toast.error("Please provide all the details");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (data.success) {
        // console.log("Signup successful:", data.data);
        toast.success('Signup successful!');
        set({ name: '', email: '', password: '', role: '' }); // Reset form
      } else {
        toast.error("Signup error:", data.message);
      }
    } catch (error) {
      toast.error("Network error:", error);
    }
  },

  // Login function
  login: async (email, password, navigate) => {
    if (!email || !password) {
      toast.error('Please provide both email and password')
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        // console.log('Login successful', data.data);
        toast.success('Login successful');
        const userRole = data.data.role;

        // set({ role: userRole, isAuthenticated: true });
        set({ email, role: data.data.role, isAuthenticated: true });

        if (userRole === 'Admin') {
          navigate('/admin');
        } else if (userRole === 'User') {
          navigate('/user')
        }

        
      } else {
        // toast.error('Login error:', data.message)
        toast.error('Invalid credentials')
      }
    } catch (error) {
      toast.error("Network error:", error);
    }
  },

  logout: (navigate) => {
    set({ email: '', password: '', isAuthenticated: false }); // Clear user data
    toast.info("You have logged out.");
    navigate('/');
  },

  // Reset form fields
  resetForm: () => set({ name: '', email: '', password: '', role: '' }),
}));

export default useAuthStore;
