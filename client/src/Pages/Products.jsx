import { useEffect, useState } from "react";
import useProductStore from "../Store/productStore";
import ShoeList from "../Components/ShoeList";
import Navbar from "../Components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Filters from "../Components/Filters";

function Products() {
  const { products, error, getProducts } = useProductStore();
  const [open, setOpen] = useState(false);
  // const [filters, setFilters] = useState([]);

  function handleSortBtn() {
    setOpen((open) => !open);
  }

  useEffect(
    function () {
      getProducts();
    },
    [getProducts]
  );

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar logo="full-logo2.png" />
      <div className="flex flex-col px-20 py-5 gap-9 mt-7">
        <div className="flex justify-between  bg-white">
          <div className="text-3xl font-semibold">
            Men&apos;s Jordan Product
          </div>
          <div className="relative font-semibold cursor-pointer">
            <button onClick={handleSortBtn} className="flex gap-1 items-center">
              Sort By{" "}
              {open ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>
            {open ? (
              <div className="absolute list-none font-semibold top-5 -right-0.5 bg-white text-black w-40 p-4 rounded-md">
                <li className="mb-2">Price: High-Low</li>
                <li>Price: Low-High</li>
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
