import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kategori from './KatalogTanaman/Kategori';
import DetailKategori from './KatalogTanaman/DetailKategori'; // Pastikan path file benar
import TanamanDetail from './KatalogTanaman/TanamanDetail';
import ResepRamuan from './ResepRamuan/ResepRamuan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kategori />} />
        <Route path="/kategori/:id" element={<DetailKategori />} />
         <Route path="/tanaman/:name" element={<TanamanDetail />} />
         <Route path="/resep-ramuan" element={<ResepRamuan />} />
      </Routes>
    </Router>
  );
}

export default App;
