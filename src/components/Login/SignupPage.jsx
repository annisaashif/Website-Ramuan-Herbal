/* eslint-disable no-unused-vars */
// SignUpPage.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import logo from "../../assets/logo.png";
import BgLogin from "../../assets/BgLogin.png";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setErrorMessage("This email is already registered.");
      return;
    }

    const newUser = { email, password }; // Store the email, not username

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgLogin})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm z-10 w-full">
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="mx-auto w-12 mb-3" />
          <h2 className="text-xl font-bold text-gray-800">Daftar Akun Baru</h2>
          <p className="text-sm text-gray-600">
            Mulailah perjalanan Anda dengan Ramuan Tradisional
          </p>
        </div>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm">Username</label>
            <input
              type="text"
              className="w-full px-3 py-1.5 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm">Email</label>
            <input
              type="email"
              className="w-full px-3 py-1.5 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm">Kata Sandi</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-1.5 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute inset-y-0 right-3 top-1/2 flex items-center cursor-pointer text-gray-500 text-sm"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm">
              Konfirmasi Kata Sandi
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-1.5 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
              placeholder="Konfirmasi Kata Sandi"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-1.5 rounded-md font-semibold hover:bg-green-800 transition duration-200 text-sm"
          >
            Daftar
          </button>
        </form>

        <div className="mt-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">Atau</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center py-1.5 mt-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition duration-200 text-sm"
        >
          <FaGoogle className="mr-2" />
          Daftar dengan Google
        </button>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-green-700 font-semibold">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
