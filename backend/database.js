import mysql from "mysql2";

// Membuat koneksi ke database MySQL
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root", // ganti dengan username MySQL Anda
  password: "newpassword", // ganti dengan password MySQL Anda
  database: "ramuan_herbal", // ganti dengan nama database Anda
});

// Fungsi untuk menjalankan query
export function query(sql, values, callback) {
  connection.execute(sql, values, callback);
}

// Menghubungkan ke database
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});
