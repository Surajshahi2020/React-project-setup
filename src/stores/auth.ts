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
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: true,

  getSession: async () => {
    try {
      // 🔹 mock / API call
      const token = localStorage.getItem("token");

      if (!token) {
        set({ loading: false });
        return;
      }

      // simulate API
      const user = { id: "1", name: "Demo User" };

      set({ user, token, loading: false });
    } catch {
      set({ user: null, token: null, loading: false });
    }
  },
}));
