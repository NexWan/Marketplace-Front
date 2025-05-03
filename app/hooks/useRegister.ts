import {useMutation} from '@tanstack/react-query';

type RegisterPayload = {
    username: string;
    email: string;
    password: string;
    role: string;
    profilePicture?: string;
}

export function useRegister() {
    return useMutation ({
        mutationFn: async (data: RegisterPayload) => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (!res.ok) {
                throw new Error("Failed to register");
            }
            const response = await res.json();
            return response;
        }
    })
}