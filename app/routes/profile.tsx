import { useEffect } from "react";
import { useAuthStore } from "~/stores/useAuthStore";
import { useUpdateUser } from "~/hooks/useUpdateUser";
import { useState } from "react";
import { Alert, Avatar, Button, Input } from "@mui/joy";

export default function Profile() {
  const { user, isAuthenticated, isLoading, fetchUser } = useAuthStore();
  const { mutate: updateUser, isError, isSuccess, isPending } = useUpdateUser();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      fetchUser();
    }
  }, [isSuccess, fetchUser]);

  const handleUpdateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      profilePicture: formData.get("profilePicture") as string ?? undefined,
    };
    try {
      updateUser(data);
      setIsEditing(false);
    }
    catch (error) {
      console.error("Update failed:", error);
    }
    setIsEditing(false);
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Please log in to view your profile.
      </div>
    );
  }


  if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          Loading profile...
        </div>
      );
    }

  return (
  <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <h1 className="text-4xl font-title text-white mb-4">Profile</h1>
      <div className="flex flex-col items-start bg-gray-800 p-8 rounded-lg shadow-xl border border-slate-700 hover:shadow-2xl transition-shadow duration-300  w-96">
        <h2 className="text-2xl font-title text-white mb-4">User Information</h2>
        <Avatar sx={{alignSelf: "center", marginBottom: 2}} size="lg" />
        {!isEditing && (
        <div className="text-white text-center space-y-2">
          <p><span className="font-semibold">Username:</span> {user?.username}</p>
          <p><span className="font-semibold">Email:</span> {user?.email}</p>
          <p><span className="font-semibold">Role:</span> {user?.role}</p>
          <Button variant="solid" color="primary" sx={{alignSelf: "center", marginTop: "6"}} onClick={() => setIsEditing(!isEditing)}>
              Edit Profile
          </Button>
        </div>
        )}

        {isEditing && (
            <form className="flex flex-col items-center justify-center w-full" onSubmit={handleUpdateUser}>
            <label className="text-white mb-2" htmlFor="username">Username</label>
            <Input
              type="text"
              name="username"
              id="username"
              defaultValue={user?.username}
              placeholder="Username"
              className="mb-4"
            />
            <label className="text-white mb-2" htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="mb-4"
            />
            <label className="text-white mb-2" htmlFor="role">Role</label>
            <Input
              type="text"
              name="role"
              id="role"
              defaultValue={user?.role}
              placeholder="Role"
              className="mb-4"
            />
            <Button variant="solid" color="primary" sx={{alignSelf: "center", marginTop: "4"}} type="submit">
                Save Changes
            </Button>
          </form>
        )}
        {isPending && <Alert color={"neutral"} className="mt-4">Updating...</Alert>}
        {isError && <Alert color="danger" className="mt-4">Update failed. Please try again.</Alert>}
        {isSuccess && <Alert color="success" sx={{alignSelf: "center", marginTop: 4}} className="mt-4">Update successful!</Alert>}
      </div>
    </div>
  );
}
