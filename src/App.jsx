import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kategori from './KatalogTanaman/Kategori';
import DetailKategori from './KatalogTanaman/DetailKategori'; // Pastikan path file benar

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kategori />} />
        <Route path="/kategori/:id" element={<DetailKategori />} />
      </Routes>
    </Router>
  );
}

export default App;
