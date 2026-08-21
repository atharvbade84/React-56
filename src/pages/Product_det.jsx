import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Product_det(){

    const {product_id} = useParams()

    const [data , setData] = useState({});

    var obj ={
      "product_id":product_id,
      "token":localStorage.getItem("userToken")
    }

    useEffect(()=>{
      axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((response)=>{
        console.log("Product Details", response.data)
        setData(response.data)
      })
    },[]);

    function addtocart(){
      axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((response)=>{
        console.log("response",response)
      })
    }

    return(
        <>
        <Navbar/>
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-black -600 to-emerald-800 bg-clip-text text-transparent mt-10">
           Product Details 
       </h1>
       <br /><br />
       <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-6">

       {/* Product Card */}
       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

       <div className="grid grid-cols-1 md:grid-cols-2">

       {/* Product Image */}
       <div className="bg-gradient-to-br from-green-100 to-emerald-50 p-10 flex items-center justify-center">

        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg bg-white">

       <img
         src={data.product_img}
         alt="Product"
         className="w-full h-full object-cover hover:scale-105 transition duration-500"/>

       </div>

      </div>

      {/* Product Information */}
      <div className="p-10 md:p-14 flex flex-col justify-center">

        {/* Badge */}
        <span className="w-fit bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
          🌿 Fresh Product
        </span>

        {/* Product Name */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5">
          {data.product_name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <div className="text-yellow-400 text-xl">
            ★★★★★
          </div>

          <span className="text-gray-500">
            4.8 (120 Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mb-7">
          <span className="text-4xl font-bold text-green-600">
            ₹{data.price}
          </span>

          <span className="text-gray-400 line-through ml-4 text-lg">
            ₹150
          </span>

          <span className="ml-3 bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-semibold">
            33% OFF
          </span>
        </div>

        {/* Details */}
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Product Details
        </h3>

        <p className="text-gray-600 text-lg leading-8 mb-8">
          {data.details}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-4 mb-8">

        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          {data.cart =="Yes" ?
          <Link to="/cart" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300" >Go To Cart </Link>
          :<button onClick={addtocart} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300" >🛒 Add To Cart</button>}

        </div>

        {/* Extra Info */}
        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t">

          <div className="text-center">
            <div className="text-2xl mb-2">🚚</div>
            <p className="text-sm font-semibold text-gray-700">
              Fast Delivery
            </p>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-2">✅</div>
            <p className="text-sm font-semibold text-gray-700">
              Quality Product
            </p>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-2">🔒</div>
            <p className="text-sm font-semibold text-gray-700">
              Secure Payment
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>
        <Footer/>
        </>
    )
    
}

export default Product_det;