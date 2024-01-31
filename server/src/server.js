import express from "express";
import cors from "cors";
import { json, urlencoded } from "express";
import morgan from "morgan";

export const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

export const start = () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};
