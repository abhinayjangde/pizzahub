import winston from "winston";
import { Config } from "./index.js";

const logger = winston.createLogger({
    level: Config.LOG_LEVEL,
    defaultMeta: {
        serviceName: "auth-service",
    },
    transports: [
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === "test",
        }),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === "test",
        }),
        new winston.transports.File({
            filename: "logs/combined.log",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === "test",
        }),
    ],
});

export default logger;
