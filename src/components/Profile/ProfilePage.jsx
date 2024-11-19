/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { State, City } from "country-state-city";
import Sidebar from "./sidebar";
import profileImage from "../../assets/profil.png";

function Profile() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [kodePos, setKodePos] = useState("");
  const countryIsoCode = "ID";
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };
  return (
    <>
      <div className="flex justify-center items-start min-h-screen m-4 py-10">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-3/4 bg-white rounded-lg shadow-md p-8 ml-6">
          <h2 className="text-xl font-bold mb-6">Detail Profil</h2>
          <div className="flex items-center mb-6">
            <img
              src={profileImage}
              alt="Profile picture of a person"
              className="w-24 h-24 rounded-full mr-4"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Ganti Foto
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Nama Depan</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Nama Belakang</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nomor WhatsApp</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Alamat Sekarang</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Provinsi</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedState}
                onChange={handleStateChange}
              >
                <option value="">Pilih Provinsi</option>
                {State.getStatesOfCountry(countryIsoCode).map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Kota atau Kabupaten
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState} // Disable if no state is selected
              >
                <option value="">Pilih Kota atau Kabupaten</option>
                {selectedState &&
                  City.getCitiesOfState(countryIsoCode, selectedState).map(
                    (city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    )
                  )}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Kode Pos</label>
            <input
              type="text"
              value={kodePos}
              onChange={(e) => setKodePos(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Masukkan Kode Pos"
            />
          </div>
          <div className="flex justify-end mt-auto">
            <button
              type="submit"
              className="bg-green-700 text-white rounded py-2 px-4 hover:bg-green-800"
            >
              simpan{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
