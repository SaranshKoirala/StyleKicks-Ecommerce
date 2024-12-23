import PropTypes from "prop-types";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import useProductStore from "../Store/productStore";

function CartItem({ item }) {
  const [count, setCount] = useState(1);
  const { deleteFromCart } = useProductStore();
  const subTotal = item.price * count;

  function handleAddBtn() {
    setCount((prev) => prev + 1);
  }

  function handleSubBtn() {
    if (count === 1) {
      return;
    }
    setCount((prev) => prev - 1);
  }

  function handleDeleteBtn(id) {
    if (count > 1) {
      return;
    }
    deleteFromCart(id);
  }

  if (!item._id || !item.image || !item.name) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex justify-start items-center border border-black rounded-md gap-10 px-3 mb-5 h-60 w-[700px]">
      <img src={item.image} alt={item.name} width="200px" height="200px" />
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
          {count === 1 && (
            <button>
              <MdDeleteOutline onClick={() => handleDeleteBtn(item._id)} />
            </button>
          )}
          {count > 1 && <button onClick={handleSubBtn}>-</button>}
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
