import React from "react";
import { Button } from "@mui/joy";
import { Link, useNavigate } from "react-router";

export default function HomeComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/market");
  };
  return (
    <div className="flex flex-row items-center justify-center h-max">
      <div className="w-1/2 p-4 flex flex-col items-start justify-center">
        <h1 className="text-4xl text-white font-title">Marketplace</h1>
        <p className="text-lg font-body text-gray-300 mt-2 mb-4">
          Welcome to the Marketplace! Here you can find a variety of products
          and services.
        </p>
        <Button
          variant="solid"
          color="primary"
          className=" self-center hover:scale-105 transition-all"
          onClick={() => handleNavigation()}
        >
          Explore Now!
        </Button>
      </div>
      <div className="w-1/2 p-4 flex flex-col items-start justify-center">
        <img
          src="/imgs/marketplace-animate.svg"
          alt="Marketplace"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
