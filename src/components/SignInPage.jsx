import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-white  p-10">
        <div className="mb-6 w-full px-24 ">
          <img src="/logo.png" alt="Logo" className="w-32 h-8" />
        </div>

        <h1 className="text-6xl font-bold mb-4 w-full px-24">Welcome </h1>
        <h1 className="text-6xl font-bold mb-4 w-full px-24"> back</h1>
        <p className="text-gray text-base-500 px-24 w-full">
          You need to be signed in to access the project
        </p>
        <p className="text-gray text-base-500 mb-6 px-24 w-full">dashboard.</p>

        <form className="w-full max-w-md" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-600 mb-1">
              Email or username
            </label>
            <input
              type="text"
              placeholder="wesley.mendoza@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder:text-gray-400"
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 placeholder:text-gray-400"
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

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <div className="mb-4 flex justify-between items-center">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded"
              />
              Keep me signed in
            </label>
            <a href="#" className="text-black underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 text-white py-3  font-bold hover:bg-green-500 transition"
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            <FcGoogle className="inline-block mr-2" /> Sign in with Google
          </button>

          <p className="text-center text-gray-500 mt-2">
            Haven't joined yet?{" "}
            <Link to="/signup" className="text-green-600 underline hover:text-green-700">
              Sign in
            </Link>
          </p>
        </form>
      </div>

      <div
        className="lg:w-1/2 w-full  bg-cover bg-center relative "
        style={{
          backgroundImage: "url('/build.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
    </div>
  );
}
