import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({username , password , submit , errorMsg}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-sm p-6">
        <h2 className="text-3xl font-bold text-center">Admin Login</h2>
        <p className="text-sm font-bold text-red-500 text-center mt-3">{errorMsg}</p>
        <form onSubmit={submit} className="flex flex-col gap-4 mt-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              onChange={username}
              placeholder="Enter your username"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                onChange={password}
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white cursor-pointer"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;