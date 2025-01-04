import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, LogIn, LogOut } from "lucide-react";
import { auth } from "../firebaseConfig";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav className="flex fixed top-0 left-0 right-0 z-50 justify-between items-center p-4 bg-white text-black shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-400">
        <Link to="/" onClick={closeMenu}>Expert Writing</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute top-16 right-0 w-full bg-white md:static md:flex md:space-x-6 md:ml-auto md:items-center md:w-auto ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <li className="border-b md:border-none md:mr-4">
          <a
            href="https://wa.me/19147092434"
            className="flex justify-center items-center py-2 px-4 md:py-1 md:px-3 rounded-lg bg-yellow-400 border border-yellow-400"
            onClick={closeMenu}
          >
            <Phone className="mr-2" /> +1(914)7092434
          </a>
        </li>
        <li className="border-b md:border-none">
          <Link
            to="/"
            className="block py-2 px-4 hover:text-yellow-400"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li className="border-b md:border-none">
          <a
            href="#services"
            className="block py-2 px-4 hover:text-yellow-400"
            onClick={closeMenu}
          >
            Services
          </a>
        </li>
        <li className="border-b md:border-none">
          <a
            href="#stats"
            className="block py-2 px-4 hover:text-yellow-400"
            onClick={closeMenu}
          >
            Stats
          </a>
        </li>
        <li className="border-b md:border-none">
          <a
            href="#contact"
            className="block py-2 px-4 hover:text-yellow-400"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
        {user ? (
          <li className="border-b md:border-none">
            <button
              onClick={handleLogout}
              className="flex items-center py-2 px-4 hover:text-yellow-400"
            >
              <LogOut className="mr-2" /> Logout
            </button>
          </li>
        ) : (
          <li className="border-b md:border-none">
            <Link
              to="/login"
              className="flex items-center py-2 px-4 hover:text-yellow-400"
              onClick={closeMenu}
            >
              <LogIn className="mr-2" /> Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
