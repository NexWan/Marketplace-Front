import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomePage = currentPath === "/";

  const navList = ["home", "about"];

  return (
    <div className="flex flex-row items-center justify-between p-4 w-full top-0 fixed z-50 bg-slate-900/80 backdrop-blur-md">
      <div className="flex items-center">
        <Link
          to="home"
          className={`text-2xl font-title text-white cursor-pointer hover:scale-105 transition-all ${activeLink === "home" ? "text-blue-500" : ""}`}
          onClick={() => {
            if(!isHomePage) {
              goToHome();
            }
          }}
        >
          Marketplace
        </Link>
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="flex space-x-4">
            {navList.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  className={`text-lg font-title text-white cursor-pointer hover:scale-105 transition-all ${activeLink === item ? "text-blue-500" : ""}`}
                  onSetActive={() => setActiveLink(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
