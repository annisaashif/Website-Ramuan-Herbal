/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function Cart() {
  const [items, setItems] = useState([
    { name: "Produk 1", price: 100000 },
    { name: "Produk 2", price: 150000 },
  ]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen m-4 py-10">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-3/4 bg-white rounded-lg shadow-md p-8 ml-6">
          <h2 className="text-xl font-bold mb-6">Keranjang</h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>Rp {item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <span>Total</span>
            <span>Rp {total.toLocaleString()}</span>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-[#27481C] text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
