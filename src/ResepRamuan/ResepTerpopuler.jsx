const ResepTerpopuler = () => {
  const items = [
    { title: "Flu dan Batuk", img: "https://placehold.co/300x200?text=Flu+dan+Batuk" },
    { title: "Asam Lambung", img: "https://placehold.co/300x200?text=Asam+Lambung" },
    { title: "Diare", img: "https://placehold.co/300x200?text=Diare" },
    { title: "Hipertensi", img: "https://placehold.co/300x200?text=Hipertensi" },
    { title: "Kolesterol Tinggi", img: "https://placehold.co/300x200?text=Kolesterol+Tinggi" },
    { title: "Insomnia dan Stres", img: "https://placehold.co/300x200?text=Insomnia+dan+Stres" },
    { title: "Infeksi Saluran Kemih", img: "https://placehold.co/300x200?text=Infeksi+Saluran+Kemih" },
    { title: "Penyakit Kulit", img: "https://placehold.co/300x200?text=Penyakit+Kulit" },
    { title: "Diabetes", img: "https://placehold.co/300x200?text=Diabetes" },
    { title: "Malaria", img: "https://placehold.co/300x200?text=Malaria" }
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
