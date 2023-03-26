import "dotenv/config";
import express from "express";
import cors from "cors";
import SwaggerUI from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
import { join } from "path";

import { userRouter } from "./Adapter/RestAPI/userRouter";

const docYaml = fs.readFileSync(join(__dirname, "./swagger.yaml"), "utf-8");

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use("/doc", SwaggerUI.serve);
app.get("/doc", SwaggerUI.setup(YAML.parse(docYaml)));

app.use("/user", userRouter);

app.get("/", (request, response) => {
  return response.send("Server is running");
});

app.get("/pdf", (request, response) => {
  return response.sendFile(join(__dirname, "Generated.pdf"));
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
