/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom"; // Menggunakan useNavigate
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function Logout() {
  const navigate = useNavigate(); // Mengganti useHistory dengan useNavigate

  const handleLogout = () => {
    // Logic to logout
    alert("Anda telah logout");
    navigate("/login"); // Menggunakan navigate untuk berpindah halaman
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen m-4 py-10">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-3/4 bg-white rounded-lg shadow-md p-8 ml-6">
          <h2 className="text-xl font-bold mb-6">Keluar</h2>
          <p>Apakah Anda yakin ingin keluar?</p>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
