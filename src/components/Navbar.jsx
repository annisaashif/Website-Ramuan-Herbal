import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.png";
import User from "../assets/Profil.png";

function Navbar() {
  return (
    <div>
   <nav className="bg-white py-2" style={{ boxShadow: '0 0px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="container mx-auto flex items-center justify-between">
        <img src={Logo} alt="Logo" className="h-16 w-16" />
        <div className="flex space-x-8">
          <Link to="/" className="text-green-900 font-semibold">
            Beranda
          </Link>
          <Link to="/resep-ramuan" className="text-green-900 font-semibold">
            Resep Ramuan
          </Link>
          <Link to="/kategori" className="text-green-900 font-semibold">
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
          alt="User Profile"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </nav>
  </div>
  
  );
}

export default Navbar;
