import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import routes from "./routes.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
    cors({
        origin: process.env.ALLOWED_HOSTS.split(","),
        methods: ["PUT", "GET", "POST", "PATCH", "DELETE"],
    })
);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "/dist")));

app.use(routes);

app.use("/{*all}", function (req, res, next) {
    return res.status(404).json({
        success: false,
        message: "The resource you are trying to access isn't found",
    });
});

export default app;
