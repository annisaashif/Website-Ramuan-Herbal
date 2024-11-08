import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kategori from './KatalogTanaman/Kategori';
import DetailKategori from './KatalogTanaman/DetailKategori'; // Pastikan path file benar
import TanamanDetail from './KatalogTanaman/TanamanDetail';
import Homepage from './views/HomePage';
import ResepTerpopuler from './ResepRamuan/ResepRamuan';
import IdentifikasiPenyakit from './ResepRamuan/IdentifikasiPenyakit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
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
