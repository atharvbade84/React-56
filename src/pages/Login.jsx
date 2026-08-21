import Navbar from "../Comman/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Login() {

const nevigate = useNavigate();

const [user_mobile , setMobile] = useState();
const [user_password , setPassword] = useState();
const [error , setError] = useState();

function login(e){
    e.preventDefault();

    var obj ={
      "user_mobile":user_mobile,
      "user_password":user_password
    }
    axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((response)=>{
    console.log("response",response.data);
    
    if(response.data.status == "success"){
      localStorage.setItem("userToken",response.data.token)
      nevigate("/product")
    }else{
      setError("Invaled Username and Password")
    }


    })

    
}

  return (
    <>
      
    <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
        
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome Back 👋
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Login to your account
          </p>
          <p className="text-center font-bold bg-red-300 rounded text-red-600 ">
            {error}
            </p>

          <form onSubmit={login} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile
              </label>

              <input onChange={(e)=>setMobile(e.target.value)} type="number" placeholder="Enter your mobile" 
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"/>
            
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-blue-600 text-sm font-semibold hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/create_account"className="text-blue-600 font-semibold hover:underline">
              Register
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;