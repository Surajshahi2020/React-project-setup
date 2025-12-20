import { create } from "zustand";

type User = {
  id: string;
  name: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  getSession: () => Promise<void>;
  login: (token: string, user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: true,

  // Check if user is logged in on app start
  getSession: async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        set({ loading: false });
        return;
      }

      // Simulate API response
      const user = { id: "1", name: "Demo User" };

      set({ user, token, loading: false });
    } catch {
      set({ user: null, token: null, loading: false });
    }
  },

  // Login function
  login: (token: string, user: User) => {
    localStorage.setItem("token", token); // save token
    set({ user, token, loading: false }); // update store
  },

  // Logout function
  logout: () => {
    localStorage.removeItem("token"); // remove token
    set({ user: null, token: null }); // clear store
  },
}));


