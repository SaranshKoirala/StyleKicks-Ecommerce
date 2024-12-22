function OrderSummary() {
  return (
    <div className="flex flex-col">
      <div className="font-serif text-2xl font-semibold w-80">
        Order Summary
      </div>
      <div className="flex justify-between py-10 font-thin text-sm">
        <div>
          <p>1 Item</p>
          <p>Shipping Fee</p>
          <p>Total</p>
        </div>
        <div>
          <p>Rs. 4199</p>
          <p>Rs. 100</p>
          <p>Rs. 4299</p>
        </div>
      </div>

      <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black border border-white transition duration-300 ease-in-out">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default OrderSummary;
