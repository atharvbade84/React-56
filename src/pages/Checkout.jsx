import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const [data, setData] = useState({
    area: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
    payment_type: "COD",
  });

  useEffect(() => {
    axios.post("https://a2zithub.org/dairy/abi/cart_list",
      {
        token: localStorage.getItem("userToken")
      }
    ).then((response) => {
      console.log(response.data);
      setCart(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const placeOrder = () => {

    const obj = {
      area,
      city,
      district,
      state,
      country,
      pincode,
      payment_type,
      token: localStorage.getItem("userToken")
    };

    axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((response) => {

      console.log(response.data);

      navigate("/cart");

    });
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-10">

        <h1 className="text-4xl font-bold text-center mb-8">
          Checkout
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Address */}

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-5">
              Address
            </h2>

            <input
              name="area"
              placeholder="Area"
              value={data.area}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />

            <input
              name="city"
              placeholder="City"
              value={data.city}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />

            <input
              name="district"
              placeholder="District"
              value={data.district}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />

            <input
              name="state"
              placeholder="State"
              value={data.state}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />

            <input
              name="country"
              placeholder="Country"
              value={data.country}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              value={data.pincode}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-5"
            />

            <h2 className="text-xl font-bold mb-3">
              Payment
            </h2>

            <select
              name="payment_type"
              value={data.payment_type}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            >
              <option value="COD">
                Cash On Delivery
              </option>

              <option value="ONLINE">
                Online Payment
              </option>
            </select>

          </div>


          {/* Order */}

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>
{cart.map((item, index) => (

  <div
    key={index}
    className="flex items-center gap-4 border-b py-4"
  >

    <img
      src={item.product_img}
      alt={item.product_name}
      className="w-20 h-20 object-cover rounded-lg"
    />

    <div className="flex-1">

      <h3 className="font-bold text-lg">
        {item.product_name}
      </h3>

      <p className="text-gray-500">
        {/* ₹{item.price} × {item.qty} */}
      </p>

    </div>

    <p className="font-bold text-green-600">
      ₹{Number(item.price) * Number(item.qty)}
    </p>

  </div>

))}

            <button
              onClick={placeOrder}
              className="w-full bg-green-600 text-white p-3 rounded mt-6 font-bold"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Checkout;