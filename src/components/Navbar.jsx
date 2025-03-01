import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
     <nav className="flex items-center justify-between p-6 bg-orange-500">
     <Link to="/"> <img
        className="w-12"
        src="https://img.freepik.com/free-vector/flat-design-library-logo-template_23-2149325326.jpg"
        alt="Bookstore Logo"
        
      /></Link>
     
      <ul className="flex space-x-6   gap-5 text-white font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <div className="relative">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
