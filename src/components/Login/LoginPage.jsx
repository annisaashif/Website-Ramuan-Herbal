/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import logo from "../../assets/logo.png";
import BgLogin from "../../assets/BgLogin.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch the list of users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setErrorMessage("");
      navigate("/");
    } else {
      setErrorMessage("Invalid credentials.");
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgLogin})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="mx-auto w-16 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">
            Masuk ke Ramuan Tradisional
          </h2>
          <p className="text-gray-600">
            Yuk, lanjutkan perjalananmu mempelajari rahasia ramuan tradisional
          </p>
        </div>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700">Kata Sandi</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute inset-y-0 right-3 top-1/2 flex items-center cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="text-green-700 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-600">Ingat Saya</span>
            </label>
            <Link to="/forgot-password" className="text-green-700 text-sm">
              Lupa password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition duration-200"
          >
            Masuk
          </button>
        </form>

        <div className="mt-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-500">Atau</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center py-2 mt-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition duration-200"
        >
          <FaGoogle className="mr-2" />
          Masuk dengan Google
        </button>

        <p className="mt-6 text-center text-gray-600">
          Belum punya akun?{" "}
          <Link to="/signup" className="text-green-700 font-semibold">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
