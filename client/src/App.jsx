import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"
import Header from "./components/Header"
import SignUp from "./pages/SignUp"

import Products from "./SellerDashBoard/DashboardPages/Products"
import SellerDashBoard from "./SellerDashBoard/DashboardPages/SellerDashBoardHome"
import CreateListing from "./SellerDashBoard/DashboardPages/CreateListing"
import AddShop from "./Shop/AddShop"
import Listing from "./pages/Listing"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listing" element={<Listing />} />

        <Route path="/dashboard" element={<SellerDashBoard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addProduct" element={<CreateListing />} />
        <Route path="/addShop" element={<AddShop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
