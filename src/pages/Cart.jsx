import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const obj = {
    token: localStorage.getItem("userToken"),
  };

  useEffect(() => {
    getCart();
  }, []);

  
  const getCart = () => {
    axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((response) => {
        console.log("response", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  
  const increaseQty = (index) => {
    const updatedData = [...data];

    updatedData[index].qty =
      Number(updatedData[index].qty) + 1;

    setData(updatedData);
  };

  
  const decreaseQty = (index) => {
    const updatedData = [...data];

    if (Number(updatedData[index].qty) > 1) {
      updatedData[index].qty =
        Number(updatedData[index].qty) - 1;

      setData(updatedData);
    }
  };

  
  const removeProduct = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  
  const grandTotal = data.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 0;

    return total + price * qty;
  }, 0);

  return (
    <>
      <Navbar />

      <br />
      <br />

      <h1 className="text-5xl font-bold text-center">
        Cart Page
      </h1>

      <br />
      <br />

      <div className="max-w-8xl mx-auto px-4 py-10">

        <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">

          <table className="w-full">

            {/* Header */}
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-6 py-5 text-left">
                  Sr.No
                </th>

                <th className="px-6 py-5 text-left">
                  Name
                </th>

                <th className="px-6 py-5 text-left">
                  Image
                </th>

                <th className="px-6 py-5 text-center">
                  QTY
                </th>

                <th className="px-6 py-5 text-right">
                  Price
                </th>

                <th className="px-6 py-5 text-right">
                  Total
                </th>

                <th className="px-6 py-5 text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Products */}
            <tbody className="bg-white">

              {data.length > 0 ? (
                data.map((val, index) => {

                  const price = Number(val.price) || 0;
                  const qty = Number(val.qty) || 0;
                  const total = price * qty;

                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-500 hover:bg-gray-50"
                    >

                      {/* Sr No */}
                      <td className="px-6 py-8">
                        {index + 1}
                      </td>

                      {/* Name */}
                      <td className="px-6 py-8 font-semibold text-gray-800">
                        {val.product_name}
                      </td>

                      {/* Image */}
                      <td className="px-6 py-8">
                        <img
                          src={val.product_img}
                          alt={val.product_name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </td>

                      {/* Quantity */}
                      <td className="px-6 py-8">

                        <div className="flex items-center justify-center gap-3">

                          {/* Minus */}
                          <button
                            onClick={() =>
                              decreaseQty(index)
                            }
                            className="w-9 h-9 bg-gray-500 hover:bg-gray-300 rounded-md font-bold text-xl"
                          >
                            −
                          </button>

                          {/* Quantity */}
                          <span className="font-semibold text-lg w-8 text-center">
                            {qty}
                          </span>

                          {/* Plus */}
                          <button
                            onClick={() =>
                              increaseQty(index)
                            }
                            className="w-9 h-9 bg-gray-500 hover:bg-gray-300 rounded-md font-bold text-xl"
                          >
                            +
                          </button>

                        </div>

                      </td>

                      {/* Price */}
                      <td className="px-6 py-8 text-right font-semibold">
                        ₹{price}
                      </td>

                      {/* Total */}
                      <td className="px-6 py-8 text-right font-bold">
                        ₹{total}
                      </td>

                      {/* Action */}
                      <td className="px-6 py-8 text-center">

                        <button
                          onClick={() =>
                            removeProduct(index)
                          }
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold"
                        >
                          X
                        </button>

                      </td>

                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-500 text-xl"
                  >
                    Your Cart is Empty
                  </td>
                </tr>
              )}

            </tbody>

          </table>

          {/* Bottom Section */}
          <div className="bg-white px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-5">

            <h2 className="text-xl font-bold text-gray-800">
              Grand Total:

              <span className="text-green-600 ml-2">
                ₹{grandTotal}
              </span>
            </h2>
        
            <button onClick={() => navigate("/checkout")}
             className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg shadow-md transition">
              Proceed to Checkout
               </button>
          
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Cart;