import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bp from "body-parser";
import initProductRoute from "./router/routeProduct";

import initUserRoute from "./router/routeUser";
import initWebRouter from "./router/webRouter";

require("dotenv").config();

const app = express();
const port = process.env.HOST || 8080;

// install
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bp.urlencoded({ extended: true }));
app.use("", express.static("uploads"));

//router
initWebRouter(app);
initUserRoute(app);
initProductRoute(app);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
