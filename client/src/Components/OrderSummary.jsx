import useProductStore from "../Store/productStore";

function OrderSummary() {
  const { cart, subTotal } = useProductStore();
  const shippingPrice = 200;
  const totalPrice = subTotal + shippingPrice;

  return (
    <div className="flex flex-col justify-center">
      <div className="font-serif text-2xl font-semibold w-80">
        Order Summary
      </div>
      <div className="flex justify-between py-10 font-thin text-sm">
        <div className="flex flex-col gap-1">
          <p>{cart.length} Item</p>
          <p>Shipping Fee</p>
          <p>Total</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>Rs. {subTotal}</p>
          <p>Rs. {shippingPrice}</p>
          <p>Rs. {totalPrice}</p>
        </div>
      </div>

      <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black border border-white transition duration-300 ease-in-out">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default OrderSummary;
