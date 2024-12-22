import CartItems from "../Components/CartItems";
import Navbar from "../Components/Navbar";
import NoItems from "../Components/NoItems";
import OrderSummary from "../Components/OrderSummary";
import useProductStore from "../Store/productStore";

function Cart() {
  const { cart } = useProductStore();
  return (
    <div>
      <Navbar logo="full-logo2.png" />
      {cart.length < 1 && <NoItems />}
      {cart.length > 0 && (
        <div className="flex justify-center items-center gap-20 m-20">
          <CartItems />
          <OrderSummary />
        </div>
      )}
    </div>
  );
}

export default Cart;
