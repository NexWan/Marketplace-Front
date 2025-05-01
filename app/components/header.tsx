import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router";
import { Button } from "@mui/joy";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const navList = ["home", "about"];

  const goToHome = () => {
    if (!isHomePage) navigate("/");
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-3 max-w-screen-xl mx-auto">
        {/* Left - Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          className="text-xl font-bold text-white cursor-pointer hover:text-blue-500"
          onClick={goToHome}
        >
          Marketplace
        </ScrollLink>

        {/* Center - Nav links */}
        <nav>
          <ul className="flex items-center gap-6">
            {navList.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item}
                  smooth={true}
                  spy={true}
                  className={`text-base font-medium text-white px-2 py-1 cursor-pointer hover:text-blue-500 transition-all ${
                    activeLink === item ? "text-blue-500" : ""
                  }`}
                  onSetActive={() => setActiveLink(item)}
                  onClick={() => {
                    if (isHomePage) {
                      setActiveLink(item);
                    } else {
                      navigate("/");
                      setActiveLink(item);
                    }
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}

            {/* Right - Auth buttons */}
            <li>
              <Button
                variant="soft"
                size="md"
                color="primary"
                className="font-medium leading-none px-4 hover:cursor-pointer hobver:bg-blue-500"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </li>
            <li>
              <Button
                variant="solid"
                size="md"
                color="primary"
                className="font-medium leading-none px-4"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
