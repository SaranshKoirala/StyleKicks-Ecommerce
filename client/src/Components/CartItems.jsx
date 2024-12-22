import useProductStore from "../Store/productStore";
import CartItem from "./CartItem";

function CartItems() {
  const { cart } = useProductStore();
  return (
    <div className="flex flex-col justify-start gap-5 ">
      <div className="mb-3">
        <h1 className="font-bold text-4xl mb-2 font-serif">Your Bag</h1>
        <p className="font-light">
          Items in your bag are not reserved, check out now to make them yours.
        </p>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
}

export default CartItems;
