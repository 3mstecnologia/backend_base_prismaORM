import express from "express";
import { router } from "./routes";

var app = express();
app.use(express.json());
app.use(router);

app.listen(3399, () => {
  console.log("Server is running on port 3399");
});
