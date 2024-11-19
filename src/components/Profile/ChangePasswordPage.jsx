/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "./sidebar";

function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New password and confirm new password do not match.");
      return;
    }
  };

  return (
    <>
      <div className="flex justify-center items-start min-h-screen m-4 py-10">
        <Sidebar />
        <div className="w-3/4 bg-white rounded-lg shadow-md p-8 ml-6">
          <h2 className="text-xl font-bold mb-6">Change Password</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col mb-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex justify-end mt-auto">
              <button
                type="submit"
                className="bg-green-700 text-white rounded py-2 px-4 hover:bg-green-800"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordPage;
