import { Button, Input, Modal } from "@mui/joy"
import { HiUser, HiLockClosed, HiMail } from "react-icons/hi";
import { useRegister } from "../hooks/useRegister";
import Alert from "@mui/joy/Alert";

export default function Register() {
    const { mutate: register, isPending, isError, isSuccess } = useRegister();

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            username: formData.get("username") as string,
            email: formData.get("email" ) as string,
            password: formData.get("password") as string,
            role: "user",
        };
        try {
            register(data);
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again.");
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
            <h1 className="text-4xl font-title text-white mb-4">Register Now!</h1>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <form className="flex flex-col" onSubmit={handleRegister}>
                    <label className="text-white mb-2" htmlFor="username">Username</label>
                    <Input required startDecorator={<HiUser/>} placeholder="Enter your username" id="username" name="username" className="mb-4" />
                    <label className="text-white mb-2" htmlFor="email">Email</label>
                    <Input required startDecorator={<HiMail/>} type="email" placeholder="Enter your email" id="email" name="email" className="mb-4" />
                    <label className="text-white mb-2" htmlFor="password">Password</label>
                    <Input required startDecorator={<HiLockClosed/>} type="password" placeholder="Enter your password" id="password" name="password" className="mb-4" />
                    <Button type="submit" variant="solid" color="primary" className="mt-4">
                        Register
                    </Button>
                </form>
            </div>
            {isPending && <Alert color={"neutral"} className="mt-4">Registering...</Alert>}
            {isError && <Alert color="danger" className="mt-4">Registration failed. Please try again.</Alert>}
            {isSuccess && <Alert color="success" className="mt-4">Registration successful!</Alert>}

        </div>
    )
}