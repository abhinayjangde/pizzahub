import express from "express";
import type { Response, Express } from "express";

const app: Express = express();

app.get("/", (_, res: Response) => {
    res.send("auth service is running");
});

export default app;
