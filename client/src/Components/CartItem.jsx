import PropTypes from "prop-types";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import useProductStore from "../Store/productStore";

function CartItem({ item }) {
  const [count, setCount] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { deleteFromCart, addPrice } = useProductStore();
  let subTotal = count * item.price;

  // addPrice(subTotal);

  function handleAddBtn() {
    setCount((prev) => prev + 1);
    subTotal = count * item.price;
  }

  function handleSubBtn() {
    if (count === 1) {
      return;
    }
    setCount((prev) => prev - 1);
    subTotal = count * item.price;
  }

  function handleDeleteBtn(id) {
    if (count > 1) {
      return;
    }
    deleteFromCart(id);
  }

  function handleConfirmOrder() {
    addPrice(subTotal);
    setIsConfirmed(true);
  }

  if (!item._id || !item.image || !item.name) {
    return <p>Loading...</p>;
  }

  console.log(subTotal);

  return (
    <div className="flex justify-start items-center border border-black rounded-md gap-10 px-3 mb-5 h-60 w-[700px]">
      <img src={item.image} alt={item.name} width="200px" height="200px" />
      <div>
        <div className="flex justify-between items-center gap-20 font-bold text-xl w-full">
          <h1 className="font-sans ">{item.name}</h1>
          <p className="font-mono">Rs {subTotal}</p>
        </div>
        <p className="font-thin text-sm text-gray-400 mb-2">Men&apos;s Shoes</p>
        <p className="font-thin text-sm">Color:None</p>
        {isConfirmed && <p className="font-thin text-sm">Quantity:{count}</p>}
        <p className="font-thin text-sm">Size:None</p>
        <p className="font-thin text-sm mb-3">Style Number: {item._id}</p>
        {!isConfirmed && (
          <div className="flex justify-start items-center gap-4">
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
            <button
              className="px-2 text-sm bg-white text-black font-mono hover:border-b-2 ease-in-out"
              onClick={handleConfirmOrder}
            >
              Confirm Product
            </button>
          </div>
        )}
        {/* {isConfirmed && (
          <buttton onClick={handleEditOrder}>Edit Product</buttton>
        )} */}
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
    price: PropTypes.number.isRequired, // You can change it to PropTypes.number if price is numeric
  }).isRequired,
};

export default CartItem;
