import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductStore from "../Store/productStore";
import ShoeCard from "./ShoeCard";

function Navbar() {
  const [placeholder, setPlaceholder] = useState("Search...");
  const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState("");
  const {
    cart,
    isOpen,
    setIsOpen,
    products,
    getProducts,
    searchTerm,
    setSearchTerm,
    error,
  } = useProductStore();

  function handleKeyPressEvent() {
    navigate("/products");
    setIsOpen(false);
  }

  function handlePopularSearch(term) {
    setSearchTerm(term);
    setIsOpen(false);
    navigate("/products");
  }

  function handleSearchBtn() {
    setIsOpen(true);
  }
  function handleCancleBtn() {
    setIsOpen(false);
  }

  function handleFocus() {
    setPlaceholder("");
  }

  function handleBlur() {
    if (!searchTerm) setPlaceholder("Search...");
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    getProducts(searchTerm, "");
  }, [isOpen, searchTerm, getProducts]);

  return !isOpen ? (
    <div
      className={`flex gap-10 justify-between items-center px-10 py-1 text-black bg-white font-bold z-30`}
    >
      <Link to={"/"}>
        <img src="/full-logo2.png" className="m-0 p-0" width={150} />
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
          <li>
            <MdOutlineShoppingCart className="relative text-2xl cursor-pointer z-5" />
            {cart.length > 0 && (
              <div className="absolute top-2 right-20 w-4 h-4 bg-black text-white text-xs  rounded-full text-center">
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
      <div className="fixed top-0 left-0  bg-white z-50 px-10 py-4 flex justify-between  shadow-lg h-80 w-full ">
        <Link to="/">
          <img src="/full-logo2.png" className="m-0 p-0" width={150} />
        </Link>
        <div className="flex flex-col w-[50%] gap-10">
          <div className="relative ">
            <IoSearch
              className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500 cursor-pointer text-xl"
              onClick={handleSearchBtn}
            />
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-black"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleKeyPressEvent();
                }
              }}
            />
          </div>
          {!searchTerm ? (
            <div className="flex flex-col gap-5">
              <div className="opacity-60 font-semibold">
                Popupar Search Terms
              </div>
              <div className="flex gap-5 font-poppins">
                <Link to={"/products"}>
                  <button
                    className="w-20 bg-black/10 p-2 font-semibold rounded-3xl text-sm"
                    onClick={() => handlePopularSearch("nike")}
                  >
                    nike
                  </button>
                </Link>
                <button
                  className="w-20 bg-black/10 p-2 font-semibold rounded-3xl text-sm"
                  onClick={() => handlePopularSearch("jordan")}
                >
                  jordan
                </button>
                <button
                  className="w-20 bg-black/10 p-2 font-semibold rounded-3xl text-sm"
                  onClick={() => handlePopularSearch("air forces")}
                >
                  air forces
                </button>
                <button
                  className="w-20 bg-black/10 p-2 font-semibold rounded-3xl text-sm"
                  onClick={() => handlePopularSearch("air max")}
                >
                  air max
                </button>
                <button
                  className="w-20 bg-black/10 p-2 font-semibold rounded-3xl text-sm"
                  onClick={() => handlePopularSearch("dunks")}
                >
                  dunks
                </button>
              </div>
            </div>
          ) : error ? (
            <div>No Products Found</div>
          ) : (
            <div className="flex gap-10">
              {products?.length > 0 &&
                products
                  .slice(0, 4)
                  .map(
                    (item) => item && <ShoeCard key={item._id} item={item} />
                  )}
            </div>
          )}
        </div>
        <button
          className="bg-gray-200 h-10 text-gray-700 font-semibold px-6 rounded-lg shadow-md transition"
          onClick={handleCancleBtn}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default Navbar;
