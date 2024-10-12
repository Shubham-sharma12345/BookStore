import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle Proceed to Checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Thank you for your purchase!');
      navigate('/'); // Redirect to Home or another page after purchase
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 bg-gray-100 rounded shadow">
                <img
                  className="w-[150px] h-[100px] object-cover"
                  src={item.img}
                  alt={item.title}
                />
                <h2 className="mt-2 font-semibold">{item.title}</h2>
                <p className="text-orange-500">Price: ₹{item.price}</p>
              </div>
            ))}
          </div>

          {/* Total Price Section */}
          <div className="mt-6 p-4 bg-gray-200 rounded shadow">
            <h2 className="text-lg font-semibold">Total Price: ₹{totalPrice}</h2>
          </div>

          {/* Proceed to Checkout Button */}
          <button
            className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
