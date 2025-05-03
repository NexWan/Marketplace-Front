import { useMutation } from "@tanstack/react-query";

type UpdateUserPayload = {
    username: string;
    email: string;
    role: string;
    profilePicture: string;
}

export function useUpdateUser() {
    return useMutation({
      mutationFn: async (data: UpdateUserPayload) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/user/update`, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          throw new Error("Failed to update user");
        }
        return res.json();
      }
    });
  }