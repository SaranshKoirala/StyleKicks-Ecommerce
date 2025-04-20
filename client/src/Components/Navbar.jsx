import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useProductStore from "../Store/productStore";

function Navbar({ logo, bgcolor, textcolor }) {
  const [placeholder, setPlaceholder] = useState("Search...");
  const [searchTerm, setSearchTerm] = useState("");
  const { cart, isOpen, setIsOpen } = useProductStore();

  function handleSearchBtn() {
    setIsOpen();
  }

  function handleFocus() {
    setPlaceholder("");
  }

  function handleBlur() {
    if (!searchTerm) setPlaceholder("Search...");
  }

  // Stop background scroll on search open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return !isOpen ? (
    <div
      className={`flex gap-10 justify-between items-center px-10 py-1 text-${textcolor} bg-${bgcolor} font-bold z-30`}
    >
      <Link to={"/"}>
        <img src={`/${logo}`} className="m-0 p-0" width={150} />
      </Link>

      <ul className="flex gap-10 justify-center items-center w-[50%]">
        <Link to="/">
          <li className="cursor-pointer">Home</li>
        </Link>
        <li className="cursor-pointer">Contact Us</li>
        <Link to="/products">
          <li className="cursor-pointer">Products</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/signup">
          <li>SignUp</li>
        </Link>
      </ul>

      <ul className="flex gap-5 justify-center items-center">
        <li>
          <IoSearch
            className="text-2xl cursor-pointer"
            onClick={handleSearchBtn}
          />
        </li>
        <Link to="/cart">
          <li className="relative">
            <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
            {cart.length > 0 && (
              <div className="absolute top-0 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </div>
            )}
          </li>
        </Link>
        <li>
          <CgProfile className="text-2xl cursor-pointer" />
        </li>
      </ul>
    </div>
  ) : (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>

      {/* Search Mode Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 px-10 py-4 flex justify-between shadow-lg h-80">
        {/* Logo */}
        <Link to="/">
          <img src={`/${logo}`} className="m-0 p-0" width={150} />
        </Link>

        {/* Centered Search Bar */}
        <div className="relative w-[50%]">
          <IoSearch className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500 cursor-pointer text-xl" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-black"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* Cancel Button */}
        <button
          className="bg-gray-200 h-10 text-gray-700 font-semibold px-6 rounded-lg shadow-md transition"
          onClick={handleSearchBtn}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

// Prop validation
Navbar.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  textcolor: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Navbar;
