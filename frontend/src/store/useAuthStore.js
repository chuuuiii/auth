import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // Initial form fields
  name: '',
  email: '',
  password: '',
  role: '',

  // Update individual fields
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),

  // Signup function
  signup: async () => {
    const { name, email, password, role } = useAuthStore.getState();

    if (!name || !email || !password || !role) {
      console.error("Please fill in all fields");
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
        console.log("Signup successful:", data.data);
        set({ name: '', email: '', password: '', role: '' }); // Reset form
      } else {
        console.error("Signup error:", data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  },

  // Reset form fields
  resetForm: () => set({ name: '', email: '', password: '', role: '' }),
}));

export default useAuthStore;
