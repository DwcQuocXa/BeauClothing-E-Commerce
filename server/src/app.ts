import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Deploy successfully");
});

export default app;