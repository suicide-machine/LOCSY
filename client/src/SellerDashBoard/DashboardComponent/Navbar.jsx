import React from "react"
import { TextInput } from "@tremor/react"
import { SearchIcon } from "@heroicons/react/solid"

const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="font-bold text-slate-600">Dashboard</h1>
      <div className="py-2">
        {/* <TextInput icon={SearchIcon} placeholder="Search..." color="red" /> */}
      </div>
    </div>
  )
}

export default Navbar
