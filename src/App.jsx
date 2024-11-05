import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kategori from "./KatalogTanaman/Kategori";
import Homepage from "./views/Homepage";
import DetailKategori from "./KatalogTanaman/DetailKategori";
import TanamanDetail from "./KatalogTanaman/TanamanDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/kategori/:id" element={<DetailKategori />} />
        <Route path="/tanaman/:name" element={<TanamanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
