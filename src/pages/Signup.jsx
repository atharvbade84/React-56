import Navbar from "../Comman/Navbar";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const nevigate = useNavigate();

  const [user_name, setName] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  function create_account(e) {
    e.preventDefault();

    var obj = {
      user_name: user_name,
      user_mobile: user_mobile,
      user_email: user_email,
      user_password: user_password
    };

    console.log(obj);

    axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((response) => {
    console.log("response", response);
    nevigate("/login")
  })

  

  }

  return (
  <>
    <Navbar />
    <br />

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account ✨
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Create your account to get started
        </p>

        <form onSubmit={create_account} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={user_name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mobile
            </label>

            <input
              type="text"
              value={user_mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="w-4 h-4 accent-green-600"
            />

            <span>
              I agree to the{" "}
              <a href="#" className="text-blue-600 font-semibold">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-bold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  </>
);
}

export default Signup;