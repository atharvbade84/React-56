function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-blue-500 mb-4">FreshMart</h2>
              <p className="text-gray-400 leading-7">
                FreshMart provides high-quality groceries, fresh vegetables,
                fruits, and daily essentials at affordable prices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

              <div className="space-y-3 text-gray-400">
                <p>📍 Ahilyanagar, Maharashtra</p>
                <p>📞 +91 70574 39108</p>
                <p>✉️ support@freshmart.com</p>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition"
                >
                  Facebook
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition"
                >
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>
              © 2026 <span className="text-blue-500 font-semibold">FreshMart</span>
              . All Rights Reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500">
                Terms
              </a>
              <a href="#" className="hover:text-blue-500">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-500">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
