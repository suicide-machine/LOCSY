import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddShop = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    contactNo: 0,
    street: "",
    city: "",
    state: "",
    shopName: "",
    shopDescription: "",
    file: [],
  })
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    console.log(formData)
    if (e.target.id === "file") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.files[0], // Only take the first file for simplicity
      })
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()
    form.set("fname", formData.fname)
    form.set("lname", formData.lname)
    form.set("email", formData.email)
    form.set("password", formData.password)
    form.set("contactNo", formData.contactNo)
    form.set("street", formData.street)
    form.set("city", formData.city)
    form.set("state", formData.state)
    form.set("zipCode", formData.zipCode)
    form.set("shopName", formData.shopName)
    form.set("shopDescription", formData.shopDescription)
    form.append("file", formData.file)

    try {
      setLoading(true)
      const res = await fetch("/api/v1/seller/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data)
      if (data.success === false) {
        setLoading(false)
        // setError(data.message)
        return
      }
      setLoading(false)
      // setError(null)
      navigate("/signin")
    } catch (error) {
      setLoading(false)
      console.log(error)
      // setError(error.message)
      // console.log(error.message)
    }
  }
  return (
    <main className="p-3 w-full sm:w-3/4 md:w-3/4 lg:w-1/2  mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Add Your Shop</h1>

      <form className="" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="First Name"
              className="border p-3 rounded-lg w-1/2"
              id="fname"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-3 rounded-lg w-1/2"
              id="lname"
              required
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg w-full mx-auto"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg w-full mx-auto"
            id="password"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Contact No."
            className="border p-3 rounded-lg w-full mx-auto"
            id="contactNo"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Street"
            className="border p-3 rounded-lg w-full mx-auto"
            id="street"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded-lg w-full mx-auto"
            id="city"
            onChange={handleChange}
          />
          <div className="flex flex-col sm:flex-row gap-4 w-fu;;">
            <input
              type="text"
              placeholder="State"
              className="border p-3 rounded-lg w-1/2 mx-auto"
              id="state"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="ZIP Code"
              className="border p-3 rounded-lg w-1/2 mx-auto"
              id="zipCode"
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Shop Name"
            className="border p-3 rounded-lg w-full mx-auto"
            id="shopName"
            onChange={handleChange}
          />
          <textarea
            placeholder="Shop Description"
            className="border p-3 rounded-lg w-full mx-auto"
            id="shopDescription"
            onChange={handleChange}
          />

          <input
            className="p-3 border border-gray-300 rounded w-full"
            type="file"
            id="file"
            accept="image/*"
            name="file"
            onChange={handleChange}
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
