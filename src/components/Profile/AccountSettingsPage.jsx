/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "..Sidebar";
import Navbar from "../Navbar";

function Account() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen m-4 py-10">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-3/4 bg-white rounded-lg shadow-md p-8 ml-6">
          <h2 className="text-xl font-bold mb-6">Pengaturan Akun</h2>
          <div>
            <p>
              <strong>Email:</strong> user@example.com
            </p>
            <p>
              <strong>Nomor WhatsApp:</strong> 081234567890
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-[#27481C] text-white px-4 py-2 rounded">
              Edit Akun
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
