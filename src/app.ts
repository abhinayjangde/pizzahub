import express from "express";
import type { Request, Response, NextFunction, Express } from "express";
import logger from "./config/logger.js";
import type { HttpError } from "http-errors";

const app: Express = express();

app.get("/", (_, res: Response) => {
    res.send("auth service is running");
});

// global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                name: err.name,
                msg: err.message,
                path: "",
                location: "",
            },
        ],
    });
});

export default app;
