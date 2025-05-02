import { useMutation } from "@tanstack/react-query";

export function useLogin() {
    return useMutation({
      mutationFn: async ({ username, password }: { username: string; password: string }) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include', // 👈 IMPORTANT!
          body: JSON.stringify({ username, password }),
        });
  
        if (!res.ok) throw new Error('Login failed');
        return res.text();
      },
    });
  }