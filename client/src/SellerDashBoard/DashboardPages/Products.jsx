import React from "react"
import Sidebar from "../DashboardComponent/Sidebar"
import LeftColumn from "../DashboardComponent/LeftColumn"
import RightColumn from "../DashboardComponent/RightColumn"
import TableComponent from "../DashboardComponent/TableComponent"
import { Link } from "react-router-dom"

const Products = () => {
  return (
    <main className="flex">
      <Sidebar />

      <div className="flex flex-col flex-1 relative p-2">
        <div className=" w-full">
          <TableComponent />
        </div>

        <Link
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95   mt-5 w-2/5 mx-auto"
          to={"/addProduct"}
        >
          Create Listing
        </Link>
      </div>
    </main>
  )
}

export default Products
