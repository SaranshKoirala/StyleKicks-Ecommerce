import CartItem from "../Components/CartItem";
import Navbar from "../Components/Navbar";
import useProductStore from "../Store/productStore";

function Cart() {
  const { cart } = useProductStore();

  return (
    <div>
      <Navbar logo="full-logo2.png" />
      {cart.map((item) => {
        return <CartItem item={item} key={item._id} />;
      })}
    </div>
  );
}

export default Cart;
