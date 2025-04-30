import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
    return [
        { title: "Marketplace" },
        { name: "description", content: "Welcome to the Marketplace!" },
    ];
}

export default function Marketplace() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            Marketplace
        </div>
    )
}