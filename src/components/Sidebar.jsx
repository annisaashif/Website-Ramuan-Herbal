import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/4 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-6">Ubah Profil</h2>
      <ul>
        <li className="mb-4">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-gray-700 bg-gray-200 p-2 rounded"
                : "flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded"
            }
          >
            <span className="mr-2">Detail Profil</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/cart" // Assuming you have a cart route
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-gray-700 bg-gray-200 p-2 rounded"
                : "flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded"
            }
          >
            <span className="mr-2">Keranjang</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/saved-catalog" // Assuming you have a saved catalog route
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-gray-700 bg-gray-200 p-2 rounded"
                : "flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded"
            }
          >
            <span className="mr-2">Katalog Tersimpan</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/change-password"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-gray-700 bg-gray-200 p-2 rounded"
                : "flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded"
            }
          >
            <span className="mr-2">Kata Sandi</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout" // Assuming you have a logout route
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-gray-700 bg-gray-200 p-2 rounded"
                : "flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded"
            }
          >
            <span className="mr-2">Keluar</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
