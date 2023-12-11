import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const [formData, setFormData] = useState({})
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch("/api/v1/buyer/register", {
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
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
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
            onChange={handleChange}
            required
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
        <div className="flex flex-col sm:flex-row gap-4 w-full">
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
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {/* <GoogleAuth /> */}
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
        {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
      </div>
    </div>
  )
}

export default SignUp
