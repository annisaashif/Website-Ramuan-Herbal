/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function SavedCatalog() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen m-4 py-10">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-3/4 bg-white rounded-lg shadow-md p-8 ml-6">
          <h2 className="text-xl font-bold mb-6">Katalog Tersimpan</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Produk 1</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Hapus
              </button>
            </div>
            <div className="flex justify-between">
              <span>Produk 2</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedCatalog;
