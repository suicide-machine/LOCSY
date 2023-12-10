import React from "react"

import LeftColumn from "../DashboardComponent/LeftColumn"
import RightColumn from "../DashboardComponent/RightColumn"
import Sidebar from "../DashboardComponent/Sidebar"

const SellerDashBoard = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        {/* <Navbar /> */}

        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SellerDashBoard
