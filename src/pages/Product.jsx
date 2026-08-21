import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import Product_cart from "../Comman/Product_cart";
import axios from "axios";
import React, { useEffect, useState } from "react";
function Product() {

  const [data , setData] = useState ([]);

useEffect(()=>{
  axios.get("https://a2zithub.org/dairy/abi/product_det").then((response)=>{
    console.log("response",response.data)
    setData(response.data)
  })
},[])

  return (
    <>
      <Navbar />

      <h1 className="text-4xl font-bold text-center my-8">
         Products 
      </h1>
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {data.map((val,index)=>(         
             <Product_cart data={val} />   
          ))}
          

        </div>

      <Footer />
    </>
  );
}

export default Product;