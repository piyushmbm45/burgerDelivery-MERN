import express from "express";
import { APP_PORT } from "./config/index.js";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandle.js";
const app = express();
app.use(express.json());
app.use("/api", routes);

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`Server is Listening on ${APP_PORT}`));
