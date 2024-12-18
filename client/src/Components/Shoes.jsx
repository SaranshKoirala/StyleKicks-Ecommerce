import { useEffect, useState } from "react";
import ShoeList from "./ShoeList";

function Shoes() {
  const [shoes, setShoes] = useState([]);

  useEffect(function () {
    async function fetchShoes() {
      try {
        const res = await fetch("http://localhost:5000/api/products/");
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
    <div className="p-20 flex flex-col justify-center items-center gap-20">
      <h1 className="font-serif text-4xl font-bold  border-b-4 border-black ">
        Find Your Perfect Fit
      </h1>

      <div className="grid grid-cols-3 gap-10">
        {shoes.slice(0, 9).map((shoe) => {
          return <ShoeList shoe={shoe} key={shoe._id} />;
        })}
      </div>
    </div>
  );
}

export default Shoes;
