import { useQuery } from "@tanstack/react-query";

export function useAuthStatus() {
    return useQuery({
        queryKey: ["auth-Status"],
        queryFn: async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
            method: "GET",
            credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch auth status");
        return res.json();
        },
    });
}