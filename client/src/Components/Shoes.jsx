import { useEffect, useState } from "react";
import ShoeList from "./ShoeList";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Shoes() {
  const [shoes, setShoes] = useState([]);

  useEffect(function () {
    async function fetchShoes() {
      try {
        const res = await fetch("http://localhost:3000/api/products/");
        if (!res.ok) {
          console.log("Couldn't fetch the data.");
        }
        const data = await res.json();
        setShoes(data.products);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchShoes();
  }, []);

  return (
    <div className="mt-20 gap-10 flex flex-col justify-center items-center mb-20">
      <div className="mb-[100px]">
        <h1 className="font-serif text-3xl font-bold text-black text-center">
          Find Your Perfect Fit
        </h1>
        <p className="font-thin  mt-3 w-[800px] text-center text-gray-400">
          Step into style with our curated shoe collections where comfort meets
          trend. From casual kicks to elegant designs, discover the perfect pair
          for every occasion and express yourself with every step!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 mb-[100px]">
        {shoes.slice(0, 6).map((shoe) => {
          return <ShoeList shoe={shoe} key={shoe._id} />;
        })}
      </div>

      <Link to={"/products"}>
        <div className="flex justify-center items-center gap-3 px-3 py-2  bg-gray-600 rounded-full text-white">
          <button>View All Products</button>
          <FaArrowRight />
        </div>
      </Link>
    </div>
  );
}

export default Shoes;
