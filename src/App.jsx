import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kategori from "./KatalogTanaman/Kategori";
import Homepage from "./views/Homepage";
import ErrorPage from "./views/Home/ErrorPage";
import DetailKategori from "./KatalogTanaman/DetailKategori";
import TanamanDetail from "./KatalogTanaman/TanamanDetail";
import Community from "./views/Community/Community";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Login/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/kategori/:id" element={<DetailKategori />} />
        <Route path="/tanaman/:name" element={<TanamanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
