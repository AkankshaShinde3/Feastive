const Grocery = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-800">
          
        <h1 className="text-4xl font-extrabold mb-4">Grocery Store</h1>
        <p className="text-lg mb-6 text-center">
          Explore fresh and organic products at unbeatable prices. From fruits and
          vegetables to daily essentials, we’ve got you covered!
        </p>
        <button className="bg-green-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
          Start Shopping
        </button>
      </div>
    );
  };
  
  export default Grocery;
  