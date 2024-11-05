import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.png";
import User from "../assets/Profil.png";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <img src={Logo} alt="Logo" className="h-16 w-16" />
        <div className="flex space-x-8">
          <Link to="/" className="text-green-900 font-semibold">
            Beranda
          </Link>
          <a href="#" className="text-green-900 font-semibold">
            Resep Ramuan
          </a>
          <Link to="/Kategori" className="text-green-900 font-semibold">
            Katalog Tanaman
          </Link>
          <a href="#" className="text-green-900 font-semibold">
            Marketplace
          </a>
          <a href="#" className="text-green-900 font-semibold">
            Komunitas
          </a>
        </div>
        <img
          src={User}
          alt="User  Profile"
          className="h-12 w-12 rounded-full"
        />
      </nav>
    </div>
  );
}

export default Navbar;
