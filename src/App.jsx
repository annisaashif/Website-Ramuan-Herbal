import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kategori from "./KatalogTanaman/Kategori";
import Homepage from "./views/Homepage";
import DetailKategori from "./KatalogTanaman/DetailKategori";
import TanamanDetail from "./KatalogTanaman/TanamanDetail";
import ResepTerpopuler from "./ResepRamuan/ResepRamuan";
import IdentifikasiPenyakit from "./ResepRamuan/IdentifikasiPenyakit";
import Community from "./views/Community/Community";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Login/SignupPage";
import Logout from "./components/Login/LogoutPage";
import ErrorPage from "./views/Home/ErrorPage";
import Profile from "./components/Profile/ProfilePage";
import Cart from "./components/Profile/CartPage";
import SavedCatalog from "./components/Profile/SavedCatalogPage";
import ChangePasswordPage from "./components/Profile/ChangePasswordPage"; // Import the Change Password Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/saved-catalog" element={<SavedCatalog />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/kategori/:id" element={<DetailKategori />} />
        <Route path="/tanaman/:name" element={<TanamanDetail />} />
        <Route path="/resep-ramuan" element={<ResepTerpopuler />} />
        <Route path="/resepramuan/:id" element={<IdentifikasiPenyakit />} />
      </Routes>
    </Router>
  );
}

export default App;
