import PropTypes from "prop-types";
import { useState } from "react";

function CartItem({ item }) {
  const [count, setCount] = useState(1);

  function handleAddBtn() {
    setCount((prev) => prev + 1);
  }

  function handleSubBtn() {
    if (count === 1) {
      return;
    }
    setCount((prev) => prev - 1);
  }

  if (!item._id || !item.image || !item.name) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex justify-start items-center w-[50%] border m-20 gap-10 ">
      <img src={item.image} alt={item.name} className=" h-[250px]" />
      <div>
        <div className="flex justify-between items-center gap-20 font-bold text-xl w-full">
          <h1 className="font-sans ">{item.name}</h1>
          <p className="font-mono">Rs {item.price}</p>
        </div>
        <p className="font-thin text-sm text-gray-400 mb-2">Men's Shoes</p>
        <p className="font-thin text-sm">Color:None</p>
        <p className="font-thin text-sm">Size:None</p>
        <p className="font-thin text-sm mb-3">Style Number: {item._id}</p>
        <div className="w-20 flex justify-center items-center gap-3 px-3 border border-gray-500 rounded-full">
          <button onClick={handleSubBtn}>-</button>
          {count}
          <button onClick={handleAddBtn}>+</button>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired, // You can change it to PropTypes.number if price is numeric
  }).isRequired,
};

export default CartItem;
