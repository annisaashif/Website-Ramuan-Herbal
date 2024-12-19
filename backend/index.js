import express from "express";
import dotenv from "dotenv";
// import { connection } from "./database.js";
// import cors from "cors";
// import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();

// app.use(cors());
app.use(express.json());
// app.listen(process.env.PORT, async () => {
//   console.log;
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
