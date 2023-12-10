import React from "react"

const AddShop = () => {
  return (
    <main className="p-3 w-full sm:w-3/4 md:w-3/4 lg:w-1/2  mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Add Your Shop</h1>

      <form className="">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-fu;;">
            <input
              type="text"
              placeholder="First Name"
              className="border p-3 rounded-lg w-1/2"
              id="fname"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-3 rounded-lg w-1/2"
              id="lname"
              required
            />
          </div>
          <input
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg w-full mx-auto"
            id="email"
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg w-full mx-auto"
            id="password"
          />
          <input
            type="number"
            placeholder="Contact No."
            className="border p-3 rounded-lg w-full mx-auto"
            id="contact"
          />
          <input
            type="text"
            placeholder="Street"
            className="border p-3 rounded-lg w-full mx-auto"
            id="street"
          />
          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded-lg w-full mx-auto"
            id="city"
          />
          <div className="flex flex-col sm:flex-row gap-4 w-fu;;">
            <input
              type="text"
              placeholder="State"
              className="border p-3 rounded-lg w-1/2 mx-auto"
              id="state"
            />
            <input
              type="number"
              placeholder="ZIP Code"
              className="border p-3 rounded-lg w-1/2 mx-auto"
              id="zip"
            />
          </div>
          <input
            type="text"
            placeholder="Shop Name"
            className="border p-3 rounded-lg w-full mx-auto"
            id="shopName"
          />
          <textarea
            placeholder="Shop Description"
            className="border p-3 rounded-lg w-full mx-auto"
            id="shopDescription"
          />

          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Add Your Shop
          </button>
        </div>
      </form>
    </main>
  )
}

export default AddShop
