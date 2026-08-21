import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiAccountCircle2Line } from "react-icons/ri";


function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-md px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 cursor-pointer">
              FreshMart
            </h2>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>

            <Link to="/Product" className="hover:text-blue-600 transition">
              Products
            </Link>

            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>

          </div>

          {/* Authentication Logic */}
          {localStorage.getItem("userToken") ? (

            // Token आहे
            <div className="flex items-center gap-6">

              <Link to="/profile">
                <button className="px-6 py-2.5 rounded-lg bg-green-600 text-white font-semibold shadow-md hover: transition-all">
                  <RiAccountCircle2Line />
                </button>
              </Link>

              <Link to="/cart">
                <button className="px-6 py-2.5 rounded-lg bg-green-600 text-white font-semibold shadow-md hover: transition-all">
                  <RiShoppingCartLine />
                </button>
              </Link>

            </div>

          ) : (

            // Token नाही
            <div className="flex items-center gap-6">

              <Link to="/login">
                <button className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-pink-700 transition-all">
                  Login
                </button>
              </Link>

              <Link to="/create_account">
                <button className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-pink-700 transition-all">
                  SignUp
                </button>
              </Link>

            </div>

          )}

        </div>
      </nav>
    </>
  );
}

export default Navbar;