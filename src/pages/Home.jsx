import { useEffect, useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";
import Product_cart from "../Comman/Product_cart";  

function Home() {
 
  const [current, setCurrent] = useState(0);
  const [images , setImages]  = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [bestData, setBestData] = useState([]);
  

useEffect(()=>{

  if (images.length == 0) return;

  const interval = setInterval(()=>{
    setCurrent((prev)=>(prev+1) % images.length);
  }, 2000);

  return ()=> clearInterval(interval);
},[images]);

useEffect(()=>{
  axios.get("https://a2zithub.org/dairy/abi/slider_det").then((response)=>{
    console.log("response",response.data)
    setImages(response.data)
  })
},[]);

useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/feature_product").then((response) => {
      console.log("Featured Product Response:", response.data);
      setFeatureData(response.data);
    })
    
}, []);

useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/new_product").then((response) => {
      console.log("New Product Response:", response.data);
      setNewData(response.data);
    })
   
}, []);

useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/best_selling_product").then((response) => {
      console.log("Best Selling Product Response:", response.data);
      setBestData(response.data);
    })
    
}, []);

  return (
    <>
    <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
        
        {images.length > 0 && (
       <img
       src={images[current].slider_img}
       alt="Home"
      className="w-full h-full object-cover duration-500"
      />
      )}


    </div>


<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">Featured Products</h2>
    <button className="text-green-600 font-semibold hover:underline">
      View All →
    </button>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featureData.map((product) => (
              <Product_cart key={product.id} data={product} />
            ))}
          </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">New Products</h2>
    <button className="text-green-600 font-semibold hover:underline">
      View All →
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {newData.map((product) => (
            <Product_cart key={product.id} data={product} />
          ))}

  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">Best Selling Products</h2>
    <button className="text-green-600 font-semibold hover:underline">
      View All →
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {bestData.map((product) => (
         <Product_cart key={product.id} data={product} />
       ))}
  </div>
</section>

    <Footer/>
    </>
  );
}

export default Home;