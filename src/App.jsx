import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kategori from "./KatalogTanaman/Kategori";
import DetailKategori from "./KatalogTanaman/DetailKategori"; // Pastikan path file benar
import Homepage from "./views/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kategori />} />
        <Route path="/HomePage" element={<Homepage />} />
        <Route path="/kategori/:id" element={<DetailKategori />} />
      </Routes>
    </Router>
  );
}

export default App;
