import { Router } from "express";

const routes = Router();

routes.get("/hello", (req, res, next) => {
    return res.status(200).json({
        succss: true,
        message: "Hello from the backned",
    });
});

export default routes;
