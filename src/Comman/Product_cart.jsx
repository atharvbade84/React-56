import { Link } from "react-router-dom";

function Product_cart(props) {
  return (
    <Link to={`/product_det/${props.data.product_tbl_id}`}>
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <img
        src={props.data.product_img}alt="Apple" className="w-full h-56 object-cover"/>

      <div className="p-5">

        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          Fresh Fruit
        </span>

        <h2 className="text-2xl font-bold text-blue-500 mt-3">
          ₹{props.data.price}
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-1">
          {props.data.product_name}
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          Fresh and juicy apples packed with vitamins, fiber, and natural
          sweetness.
        </p>

        <button className="mt-5 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition duration-300">
          🛒 View Product
        </button>

      </div>
    </div>
    </Link>
  );
}

export default Product_cart;