import express from "express";
import dotenv from "dotenv";
import { PORT } from "./src/config/envConfig.js";
import apiRouter from "./src/routes/apiRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome to home route");
});

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);;
});