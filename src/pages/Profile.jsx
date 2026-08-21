import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const [profile, setprofile] = useState({});

  useEffect(()=>{

    var obj = {"token":localStorage.getItem("userToken")}

    axios.post("https://a2zithub.org/dairy/abi/user_profile", obj).then((res)=>{
      console.log("response", res.data.data);
      setprofile(res.data.data);
    })

  },[])

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-5">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Top Banner */}
            <div className="h-40 bg-gradient-to-r from-orange-400 to-orange-600"></div>

            {/* Profile Info */}
            <div className="px-8 pb-8">

              {/* Profile Image */}
              <div className="-mt-16 mb-5">
                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-800">
                {profile[0]?.user_name}
              </h1>

              <p className="text-gray-500 mt-1">
                Customer
              </p>

              {/* Profile Details */}
              <div className="grid md:grid-cols-2 gap-5 mt-8">

                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-500">
                    Full Name
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {profile.name}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-500">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {profile.email}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-500">
                    Mobile Number
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {profile.mobile}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-500">
                    City
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {profile.city}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 md:col-span-2">
                  <p className="text-sm text-gray-500">
                    Address
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {profile.address}
                  </p>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Edit Profile
                </button>

                <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
                  Logout
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;