import cors from "cors";
import express from "express";
import { AppDataSource } from "./data-source";
import { config } from "dotenv";
import { routes } from "./routes/producersRoutes";
import "reflect-metadata";

config();

const app = express();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection success");

    app.use(express.json());

    app.use(
      cors({
        origin: "http://localhost:8000",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
      })
    );

    app.use("/api", routes);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Failed to connect to database => ", err));
