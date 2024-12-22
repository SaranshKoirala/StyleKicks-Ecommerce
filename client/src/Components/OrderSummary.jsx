import useProductStore from "../Store/productStore";

function OrderSummary() {
  const { cart } = useProductStore();
  const subTotal = cart.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
  const shippingFee = 100;
  const total = subTotal + shippingFee;

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
          <p>Rs. 100</p>
          <p>Rs. {total}</p>
        </div>
      </div>

      <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black border border-white transition duration-300 ease-in-out">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default OrderSummary;
