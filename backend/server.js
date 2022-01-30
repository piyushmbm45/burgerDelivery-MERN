import express from "express";
import { APP_PORT } from "./config/index.js";

const app = express();
console.log(APP_PORT);
app.listen(APP_PORT, () => console.log(`Server is Listening on ${APP_PORT}`));
