import asam_lambung from "../assets/penyakit/asam_lambung.png";
import diabetes from "../assets/penyakit/diabetes.png";
import flu_batuk from "../assets/penyakit/flu_batuk.png";
import diare from "../assets/penyakit/diare.png";
import hipertensi from "../assets/penyakit/hipertensi.png";
import infeksi from "../assets/penyakit/infeksi.png";
import insomnia from "../assets/penyakit/insomnia.png";
import kolestrol from "../assets/penyakit/kolestrol.png";
import kulit from "../assets/penyakit/kulit.png";
import malaria from "../assets/penyakit/malaria.png";




const ResepTerpopuler = () => {
  const items = [
    { title: "Flu dan Batuk", img: flu_batuk },
    { title: "Asam Lambung", img: asam_lambung },
    { title: "Diare", img: diare },
    { title: "Hipertensi", img: hipertensi },
    { title: "Kolesterol Tinggi", img: kolestrol },
    { title: "Insomnia dan Stres", img: insomnia },
    { title: "Infeksi Saluran Kemih", img: infeksi },
    { title: "Penyakit Kulit", img: kulit },
    { title: "Diabetes", img: diabetes },
    { title: "Malaria", img: malaria }
  ];

  return (
    <>
      <div className="container mx-auto p-4 mt-8 mb-20">
  <h1 className="text-2xl font-bold text-center text-green-800 mb-6">Resep Terpopuler</h1>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {items.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-2 bg-green-800 text-white text-center">
          <p>{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default ResepTerpopuler;
