import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navnar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSearchBtn() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex gap-10 justify-between items-center px-10 py-2 text-white  ">
      <img src="/full-logo.png" className="m-0 p-0" width={150} />
      <ul className="flex gap-10 justify-center items-center  ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Contact Us</li>
        <li className="cursor-pointer">Products</li>
        <Link to={"/login"}>
          <li>Login</li>
        </Link>
        <Link to={"/signup"}>
          <li>SignUp</li>
        </Link>
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
            <div className="relative w-full">
              <IoSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={handleSearchBtn}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-black"
              />
            </div>
          )}
          {/* <IoSearch
            className="absolute text-2xl cursor-pointer"
            onClick={handleSearchBtn}
          />

          {isOpen && (
            <input
              className="relative placeholder:italic placeholder:text-slate-400 block bg-white w-[200px] border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search..."
              type="text"
              name="search"
            />
          )} */}
        </li>
        <li>
          <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
        </li>
        <li>
          <CgProfile className="text-2xl cursor-pointer" />
        </li>
      </ul>
    </div>
  );
}

export default Navnar;
