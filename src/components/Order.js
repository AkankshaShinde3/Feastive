const Order = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center h-screen bg-white">
      <img className="w-20 h-20" src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_green.png"></img>

      <h1 className="text-2xl font-semibold text-gray-800">
        Order Successful!
      </h1>
      <p className="text-gray-600">
        Thank you for your purchase. Your order is being processed.
      </p>
    </div>
  );
};

export default Order;
