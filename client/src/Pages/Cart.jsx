import useProductStore from "../Store/productStore";

function Cart() {
  const { getCart } = useProductStore();
  console.log(getCart);
  return <div>This is the cart page</div>;
}

export default Cart;
