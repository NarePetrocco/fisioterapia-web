import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";

const navigation = [
  { name: "HOME", to: "/" },
  { name: "SERVICIOS", to: "/servicios" },
  { name: "SOBRE MI", to: "/sobre-mi" },
  { name: "TESTIMONIOS", to: "/testimonios" },
  { name: "CONTACTO", to: "/contacto" },
];

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="w-full flex items-center justify-between px-6 sm:px-8 lg:px-12 h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 text-lg font-semibold transition ${
                  isActive ? "text-cyan-600" : "text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-2 text-lg font-semibold">
          <Phone className="h-5 w-5 text-gray-600" />
          <span className="text-black">+614 33 23 12</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-300" />

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out bg-white`}>
        <div className="px-4 py-3 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            >
              {item.name}
            </NavLink>
          ))}
          {/* Mobile Contact Info */}
          <div className="flex items-center space-x-2 text-base font-medium pt-2">
            <Phone className="h-5 w-5 text-gray-600" />
            <span className="text-black">+614 33 23 12</span>
          </div>
        </div>
      </div>

      <Toaster />
    </header>
  );
}

export default NavBar;
