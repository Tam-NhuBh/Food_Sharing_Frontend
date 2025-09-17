import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import useAuth from "../../../hooks/useAuth";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setIsLogOutOpen(false);
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-300 shadow relative">
      {/* Logo */}
      <Link to="/">
        <h1 className="font-lobster text-primary text-lg sm:text-xl md:text-3xl">
          Nom Nom
        </h1>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-md lg:text-lg">
        <Link
          to="/"
          className={`font-worksans ${
            location.pathname === "/" ? "underline" : ""
          } hover:underline`}
        >
          Home
        </Link>
        <Link
          to="/recipes"
          className={`font-worksans ${
            location.pathname === "/recipes" ? "underline" : ""
          } hover:underline`}
        >
          Recipes
        </Link>
        <Link
          to="/about"
          className={`font-worksans ${
            location.pathname === "/about" ? "underline" : ""
          } hover:underline`}
        >
          About
        </Link>
      </nav>
      
      

      {/* Desktop Auth */}
      {!user && (
        <div className="hidden md:flex items-center space-x-4 text-md lg:text-lg">
          <Link
            to="/login"
            className={`font-worksans ${
              location.pathname === "/login" ? "underline" : ""
            } hover:underline`}
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className={`font-worksans text-primary px-4 py-2 font-semibold ${
              location.pathname === "/sign-up" ? "underline" : ""
            } hover:underline`}
          >
            Sign up
          </Link>
        </div>
      )}

      {user && (
        <div className="flex gap-5 relative">
          <p
            className="font-bold cursor-pointer text-primary invisible md:visible"
            onClick={() => setIsLogOutOpen((prev) => !prev)}
          >
            {user.email}
          </p>
          {isLogOutOpen && (
            <div
              className="z-1000 absolute text-center py-2 bg-primary text-white rounded-[6px] w-full top-[100%] cursor-pointer hover:text-primary hover:bg-white"
              onClick={handleLogOut}
            >
              <p className="font-bold">Log Out</p>
            </div>
          )}
        </div>
      )}

      {/* Mobile Hamburger */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-50 shadow-md flex flex-col items-left px-4 py-4 space-y-4 md:hidden">
          <Link
            to="/"
            className="font-worksans hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="font-worksans hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Recipes
          </Link>
          <Link
            to="/about"
            className="font-worksans hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {!user && (
            <div className="flex flex-col gap-4">
              <Link
                to="/login"
                className={`font-worksans ${
                  location.pathname === "/login" ? "underline" : ""
                } hover:underline`}
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className={`font-worksans text-primary font-semibold ${
                  location.pathname === "/sign-up" ? "underline" : ""
                } hover:underline`}
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </div>
          )}

          {user && (
            <div className="flex flex-col gap-2">
              <p
                className="font-bold cursor-pointer text-primary"
                onClick={() => setIsLogOutOpen((prev) => !prev)}
              >
                {user.email}
              </p>
              <div
                className="text-left py-2 bg-light-gray text-black rounded-sm w-full cursor-pointer"
                onClick={handleLogOut}
              >
                <p className="font-worksans hover:underline">Log Out</p>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
