import { Button, Input, Modal } from "@mui/joy"
import { HiUser, HiLockClosed, HiMail } from "react-icons/hi";
import { useLogin } from "../hooks/useLogin";
import Alert from "@mui/joy/Alert";

export default function Login() {
    const { mutate: register, isPending, isError, isSuccess } = useLogin();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            username: formData.get("username") as string,
            password: formData.get("password") as string,
        };
        try {
            register(data);
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    if(isSuccess) {
        setTimeout(() => {
            window.location.href = "/market";
        }
        , 2000);
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
            <h1 className="text-4xl font-title text-white mb-4">Login</h1>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <form className="flex flex-col" onSubmit={handleLogin}>
                    <label className="text-white mb-2" htmlFor="username">Username</label>
                    <Input required startDecorator={<HiUser/>} placeholder="Enter your username" id="username" name="username" className="mb-4" />
                    <label className="text-white mb-2" htmlFor="password">Password</label>
                    <Input required startDecorator={<HiLockClosed/>} type="password" placeholder="Enter your password" id="password" name="password" className="mb-4" />
                    <Button type="submit" variant="solid" color="primary" className="mt-4">
                        Login
                    </Button>
                </form>
            </div>
            {isPending && <Alert color={"neutral"} className="mt-4">Login...</Alert>}
            {isError && <Alert color="danger" className="mt-4">Login failed, please try again and make sure your credentials are correct</Alert>}
            {isSuccess && <Alert color="success" className="mt-4">Login succesful! Redirecting to marketplace...</Alert>}

        </div>
    )
}