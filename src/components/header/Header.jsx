import React, { useState } from "react";
import logo from "../../assets/lg.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch, faUserAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // nav links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Membership", path: "/membership" },
  ];

  // helper for NavLink styles
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "font-semibold underline underline-offset-4 decoration-2 decoration-[#6A5794]"
      : "font-semibold text-gray-600 hover:text-[#6A5794]";

  return (
    <nav className="w-full bg-white shadow-md  top-0 left-0 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-12 sm:h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Thyro Health Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="font-semibold text-md sm:text-2xl text-[#6A5794]">Thyro Health</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={navLinkClasses}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faSearch} className="text-gray-700 cursor-pointer" />
          <FontAwesomeIcon icon={faUserAlt} className="text-gray-700 cursor-pointer" />
          <FontAwesomeIcon icon={faCartShopping} className="text-gray-700 cursor-pointer" />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon className="text-[21px] text-center" icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

     {/* Mobile Dropdown Menu */}
{isMenuOpen && (
  <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
    {navLinks.map((link) => (
      <NavLink
        key={link.name}
        to={link.path}
        // override style: block items + no underline
        className={({ isActive }) =>
          isActive
            ? "block w-full font-semibold text-[#6A5794]"
            : "block w-full font-semibold text-gray-600 hover:text-[#6A5794]"
        }
        onClick={() => setIsMenuOpen(false)} // close menu after click
      >
        {link.name}
      </NavLink>
    ))}
  </div>
)}

    </nav>
  );
}
