import express from "express";

const app = express();

app.get("/", (_, res) => {
    res.send("auth service is running");
});

export default app;
