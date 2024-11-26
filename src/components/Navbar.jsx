import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import User from "../assets/Profil.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          {/* Logo */}
          <NavLink to="/" className="hidden md:block">
            <img src={Logo} alt="Logo" className="h-12 w-12 cursor-pointer" />
          </NavLink>
          <button
            onClick={toggleMobileMenu}
            className="text-bg-[#27481C] md:hidden"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#27481C] text-white font-semibold p-2 rounded"
                : "text-bg-[#27481C] font-semibold hover:bg-[#27481C] hover:text-white transition duration-300 p-2 rounded"
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/resep-ramuan"
            className={({ isActive }) =>
              isActive
                ? "bg-[#27481C] text-white font-semibold p-2 rounded"
                : "text-bg-[#27481C] font-semibold hover:bg-[#27481C] hover:text-white transition duration-300 p-2 rounded"
            }
          >
            Resep Ramuan
          </NavLink>
          <NavLink
            to="/Kategori"
            className={({ isActive }) =>
              isActive
                ? "bg-[#27481C] text-white font-semibold p-2 rounded"
                : "text-bg-[#27481C] font-semibold hover:bg-[#27481C] hover:text-white transition duration-300 p-2 rounded"
            }
          >
            Katalog Tanaman
          </NavLink>
          <NavLink
            to="/MarketPlace"
            className={({ isActive }) =>
              isActive
                ? "bg-[#27481C] text-white font-semibold p-2 rounded"
                : "text-bg-[#27481C] font-semibold hover:bg-[#27481C] hover:text-white transition duration-300 p-2 rounded"
            }
          >
            Marketplace
          </NavLink>
          <NavLink
            to="/Community"
            className={({ isActive }) =>
              isActive
                ? "bg-[#27481C] text-white font-semibold p-2 rounded"
                : "text-bg-[#27481C] font-semibold hover:bg-[#27481C] hover:text-white transition duration-300 p-2 rounded"
            }
          >
            Komunitas
          </NavLink>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={User}
            alt="User Profile"
            className="h-12 w-12 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <NavLink
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-[#27481C] hover:text-white rounded-t-md transition duration-300"
                >
                  Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-800 hover:bg-[#27481C] hover:text-white w-full text-left rounded-b-md transition duration-300"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Off-canvas Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      ></div>
      <motion.div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-300 z-30 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-bg-[#27481C]"
        >
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col p-4 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <NavLink
              to="/"
              className="text-gray-800 hover:bg-gray-100 hover:text-[#27481C] p-2 rounded"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Beranda
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <a
              href="/"
              className="text-gray-800 hover:bg-gray-100 hover:text-[#27481C] p-2 rounded"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Resep Ramuan
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <NavLink
              to="/Kategori"
              className="text-gray-800 hover:bg-gray-100 hover:text-[#27481C] p-2 rounded"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Katalog Tanaman
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-100 hover:text-[#27481C] p-2 rounded"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Marketplace
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <a
              href="/Community"
              className="text-gray-800 hover:bg-gray-100 hover:text-[#27481C] p-2 rounded"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Komunitas
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
