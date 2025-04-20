import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import useProductStore from "../Store/productStore";

function Navbar({ logo, bgcolor, textcolor }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useProductStore();

  function handleSearchBtn() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`flex gap-10 justify-between items-center px-10 py-2 text-${textcolor} bg-${bgcolor} font-bold`}
    >
      <Link to={"/"}>
        <img src={`/${logo}`} className="m-0 p-0" width={150} />
      </Link>

      <ul className="flex gap-10 justify-center items-center w-[50%]  ">
        {!isOpen && (
          <>
            <Link to="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <li className="cursor-pointer">Contact Us</li>
            <Link to={"/products"}>
              <li className="cursor-pointer">Products</li>
            </Link>
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
            <Link to={"/signup"}>
              <li>SignUp</li>
            </Link>
          </>
        )}
        {isOpen && (
          <div className="relative w-full">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-black"
            />
          </div>
        )}
      </ul>

      <ul className="flex gap-5 justify-center items-center">
        <li>
          {!isOpen && (
            <IoSearch
              className=" text-2xl cursor-pointer"
              onClick={handleSearchBtn}
            />
          )}
          {isOpen && (
            <button
              className="bg-gray-200  text-gray-700 font-semibold p-2 rounded-lg shadow-lg transition"
              onClick={handleSearchBtn}
            >
              Cancel
            </button>
          )}
        </li>
        <Link to="/cart">
          <li className="relative">
            <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
          </li>
          {cart.length > 0 ? (
            <div className="absolute  top-3 right-20 text-sm ">
              {cart.length}
            </div>
          ) : (
            <></>
          )}
        </Link>
        <li>
          <CgProfile className="text-2xl cursor-pointer" />
        </li>
      </ul>
    </div>
  );
}

// Prop validation
Navbar.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  textcolor: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired, // Ensures 'color' is a string and required
};

export default Navbar;
