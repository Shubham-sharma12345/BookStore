

  
const Card = ({ item, onAddToCart }) => {
  const { title, author, price, amount, img } = item;

  return (
    <div className="m-4 p-4 w-full shadow-md bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
      <img
        className="w-[250px] h-[150px] object-cover rounded-lg"
        src={img}
        alt={title}
      />
      <div className="mt-2">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600">by {author}</p>
        <p className="text-orange-500 font-bold">Price: ₹{price}</p>
        <p className="text-gray-500">Stock: {amount}</p>
      </div>
      <button
        className="mt-4 w-[250px] p-2 bg-amber-500 text-white rounded hover:bg-amber-600"
        onClick={() => onAddToCart(item)} // Add item to cart
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Card;

  