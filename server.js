// server.js
import express from "express";
import passport from "passport";
import session from "express-session";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import cors from "cors";
import { query } from "./db.js";

const app = express();
const PORT = 3000;

// Endpoint untuk mengambil data pengguna
app.get("/users", (req, res) => {
  query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error executing query", err);
      return res.status(500).send("Internal Server Error");
    }
    res.json(results);
  });
});

// Menjalankan server

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Dummy user data (simulasi database)
const users = [
  {
    id: 1,
    email: "user@example.com",
    password: bcrypt.hashSync("password123", 10), // password yang terenkripsi
  },
];

// Passport Local Strategy
passport.use(
  new LocalStrategy((email, password, done) => {
    const user = users.find((u) => u.email === email);
    if (!user) return done(null, false, { message: "Invalid credentials." });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return done(err);
      if (isMatch) return done(null, user);
      return done(null, false, { message: "Invalid credentials." });
    });
  })
);

// Serialisasi dan deserialisasi pengguna
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

// Route untuk halaman utama (Home) setelah login
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    return res.send("Welcome to the homepage!");
  }
  res.status(401).send("You need to log in first.");
});

// Route untuk login (POST) menggunakan Passport
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/", // Setelah login sukses
    failureRedirect: "/login", // Kembali ke login jika gagal
    failureFlash: true,
  })
);

// Route untuk logout
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Logout error");
    }
    res.redirect("/"); // Arahkan ke homepage setelah logout
  });
});

// Route untuk halaman login (GET)
app.get("/login", (req, res) => {
  res.send("Please log in.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
