import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-300 shadow relative">
      {/* Logo */}
      <Link to="/">
        <h1 className="font-lobster text-primary text-lg sm:text-xl md:text-3xl">Nom Nom</h1>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-md lg:text-lg">
        <Link to="/" className="font-worksans hover:underline">Home</Link>
        <Link to="/recipes" className="font-worksans hover:underline">Recipes</Link>
        <Link to="/about" className="font-worksans hover:underline">About</Link>
      </nav>

      {/* Desktop Auth */}
      <div className="hidden md:flex items-center space-x-4 text-md lg:text-lg">
        <Link to="/login" className="font-worksans">Login</Link>
        <Link
          to="/signup"
          className="font-worksans bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/80"
        >
          Sign up
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-100 shadow-md flex flex-col items-left px-4 py-4 space-y-4 md:hidden">
          <Link to="/" className="font-worksans hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/recipes" className="font-worksans hover:underline" onClick={() => setIsOpen(false)}>Recipes</Link>
          <Link to="/about" className="font-worksans hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/login" className="font-worksans" onClick={() => setIsOpen(false)}>Login</Link>
          <Link
            to="/signup"
            className="font-worksans bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/80"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
}
