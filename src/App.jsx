import Home from "./pages/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Product from "./pages/Product"
import Product_det from "./pages/Product_det"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Checkout from "./pages/Checkout"

function App() {

  return (
    <BrowserRouter>

    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Product" element={<Product/>}/>
     <Route path="/Product_det/:product_id" element={<Product_det/>}/>
     <Route path="/login" element={<Login/>} />
     <Route path="/create_account" element={<Signup/>} />
     <Route path="/cart" element={<Cart/>}/>     
     <Route path="/profile" element={<Profile/>} />
     <Route path="/checkout" element={<Checkout/>} />
     </Routes>

    </BrowserRouter>
  )
}

export default App
