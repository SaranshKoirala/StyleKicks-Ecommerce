import { useEffect, useState } from "react";
import useProductStore from "../Store/productStore";
import ShoeList from "../Components/ShoeList";
import Navbar from "../Components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Filters from "../Components/Filters";

function Products() {
  const { products, getProducts, searchTerm } = useProductStore();
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  function handleIcons() {
    setOpen((open) => !open);
  }

  function handleSortBtn(order) {
    setSortOrder(order);
  }

  useEffect(
    function () {
      getProducts(searchTerm, sortOrder);
    },
    [getProducts, sortOrder, searchTerm]
  );

  return (
    <div>
      <Navbar logo="full-logo2.png" />
      <div className="flex flex-col px-20 py-5 gap-9 mt-7">
        <div className="flex justify-between  bg-white">
          {searchTerm.length > 3 ? (
            <div className="text-3xl font-semibold">
              search results for "{searchTerm}"
            </div>
          ) : (
            <div className="text-3xl font-semibold">
              Men&apos;s Jordan Product
            </div>
          )}
          <div className="relative font-semibold cursor-pointer">
            <button onClick={handleIcons} className="flex gap-1 items-center">
              Sort By{" "}
              {open ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>
            {open ? (
              <div className="absolute list-none font-semibold top-5 -right-0.5 bg-white text-black w-40 p-4 rounded-md">
                <button className="mb-2" onClick={() => handleSortBtn("dec")}>
                  Price: High-Low
                </button>
                <button onClick={() => handleSortBtn("asc")}>
                  Price: Low-High
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          <Filters />
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-10">
              {products.map((product) => {
                return <ShoeList shoe={product} key={product._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
