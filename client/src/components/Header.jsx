import React from "react"
import Logo from "../assets/logo.png"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <img src={Logo} alt="Logo" width={100} height={50} className="" />
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-xl "
          />
          <FaSearch className="text-slate-600 text-xl" />
        </form>

        <ul className="flex gap-5">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline text-xl">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline text-xl">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className=" text-slate-700 hover:underline text-xl">Sign in</li>
          </Link>
        </ul>

        {/* <div className="">
          <h3 className="justify-end text-xl">Become a seller</h3>
        </div> */}
      </div>
    </header>
  )
}

export default Header
