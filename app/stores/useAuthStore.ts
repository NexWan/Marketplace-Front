import { create } from "zustand";

type User = {
  id: string;
  username: string;
  role: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  fetchUser: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user) => set({ user, isAuthenticated: true, isLoading: false }),

  logout: async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    set({ user: null, isAuthenticated: false });
  },

  fetchUser: async () => {
    set({ isLoading: true });
    try {
      const user = await (await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
        credentials: "include",
      })).json();
  
      set({ user, isAuthenticated: true, isLoading: false });
    } catch {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));
