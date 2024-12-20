import { useEffect } from "react";
import useProductStore from "../Store/productStore";
import ShoeList from "../Components/ShoeList";
import Navbar from "../Components/Navbar";

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
    <>
      <Navbar logo="full-logo2.png" />

      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => {
            return <ShoeList shoe={product} key={product._id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
