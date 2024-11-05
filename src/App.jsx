import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kategori from './KatalogTanaman/Kategori';
import DetailKategori from './KatalogTanaman/DetailKategori'; // Pastikan path file benar
import TanamanDetail from './KatalogTanaman/TanamanDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/kategori/:id" element={<DetailKategori />} />
         {/* Tambahkan rute untuk halaman detail tanaman */}
         <Route path="/tanaman/:name" element={<TanamanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
