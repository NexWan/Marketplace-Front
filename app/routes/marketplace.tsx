import type { Route } from "./+types/home";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Alert } from "@mui/joy";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Marketplace" },
        { name: "description", content: "Welcome to the Marketplace!" },
    ];
}

export default function Marketplace() {
    const { data: authStatus, isLoading, isError } = useAuthStatus();
    console.log("Auth Status:", authStatus);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
                Loading...
            </div>
        );
    }
    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> 
            <Alert color="danger" className="mt-4">
                User not authenticated, please login or register.
            </Alert>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            Marketplace
        </div>
    )
}