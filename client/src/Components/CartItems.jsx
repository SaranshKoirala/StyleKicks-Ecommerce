import useProductStore from "../Store/productStore";
import CartItem from "./CartItem";

function CartItems() {
  const { cart } = useProductStore();
  return (
    <div>
      {cart.map((item) => {
        return <CartItem item={item} key={item._id} />;
      })}
    </div>
  );
}

export default CartItems;
