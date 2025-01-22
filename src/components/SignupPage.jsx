import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
     
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-white  p-16">
        
        <div className="mb-6 w-full px-24 ">
          <img
            src="/logo.png" 
            alt="Logo"
            className="w-32 h-8"
          />
        </div>
      
        <h1 className="text-6xl font-bold mb-4 w-full px-20 ">Get started </h1>
        <h1 className="text-6xl font-bold mb-4 w-full px-20">with Blank</h1>
        <p className="text-gray-500 text-base mb-6 w-full px-20">
          Join Blank for free today. No credit card required.
        </p>

        <form className="w-full max-w-md">

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="wesley.mendoza@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="zA7M5kwSWOYatE8"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
              >
                👁️
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded"
                required
              />
              I agree to the{" "}
              <a
                href="#"
                className="text-black underline ml-1 "
              >
                terms of use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-black underline ml-1 "
              >
                privacy statement
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 text-white py-3  font-bold hover:bg-green-500 transition"
          >
            Continue
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
           <FcGoogle className="inline-block mr-2" /> Sign in with Google
          </button>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-green-600 underline hover:text-green-700">
              Log in
            </Link>
          </p>
        </form>
      </div>

      <div
        className="lg:w-1/2 w-full bg-cover bg-center relative "
        style={{
          backgroundImage: "url('/girl.jpeg')", 
        }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col items-start justify-end px-8 lg:px-16 text-green-300 absolute bottom-3 ">
            <p className="text-xl lg:text-2xl font-semibold mb-4">
              Blank is the ultimate time  saver for small business owners like me.
            </p>
            <p className="font-bold text-lg">Brittany Stone</p>
            <p className="text-gray-300">SnapVision</p>
          </div>
        </div>
      </div>
    </div>
  );
}
