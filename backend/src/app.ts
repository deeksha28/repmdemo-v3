import express from "express";
import "reflect-metadata";
import cors from "cors";
import * as bodyParser from "body-parser";
import router from "../routes/notification";

import http from "http";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:4200" }));

app.use("/api/notifications", router);

export default app;
