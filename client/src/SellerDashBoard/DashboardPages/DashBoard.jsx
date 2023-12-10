import React from "react"
import SellerDashBoard from "./SellerDashBoardHome"
import Sidebar from "../DashboardComponent/Sidebar"

const DashBoard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col flex-1 relative">
        <SellerDashBoard />
      </main>
    </div>
  )
}

export default DashBoard
