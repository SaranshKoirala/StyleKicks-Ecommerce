import { useEffect } from "react";
import useProductStore from "../Store/productStore";
import ShoeList from "../Components/ShoeList";
import Navbar from "../Components/Navbar";
import { FaChevronDown } from "react-icons/fa";

function Products() {
  const { products, error, getProducts } = useProductStore();

  useEffect(
    function () {
      getProducts();
    },
    [getProducts]
  );

  if (error) {
    return <p>{error}</p>;
  }

  console.log(products);

  return (
    <div>
      <Navbar logo="full-logo2.png" />
      {/* <div className="border-t border-t-gray-400 mt-4"></div> */}
      <div className="flex flex-col px-20 py-5 gap-9 mt-7">
        <div className="flex justify-between ">
          <div className="text-3xl font-semibold">Men's Jordan Product</div>

          <div className="flex gap-1 items-center font-semibold cursor-pointer">
            Sort By <FaChevronDown className="text-sm" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[15%]">
            {/* <div className="text-2xl font-semibold">Filter</div> */}
            <div className=" ">
              <div className=" font-semibold py-2">Gender</div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Men</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Women</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Unisex</p>
              </div>
            </div>
            <div className=" ">
              <div className="font-semibold py-2">Shop By Price</div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Rs2000 - Rs4000</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Rs5000 - Rs7000</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Rs8000 - above</p>
              </div>
            </div>
            <div className="">
              <div className="font-semibold py-2">Brand</div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Nike</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Adidas</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Converse</p>
              </div>
            </div>
            <div className=" ">
              <div className="font-semibold py-2">Category</div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Sports</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Sneakers</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" /> <p>Formals</p>
              </div>
            </div>
          </div>

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
