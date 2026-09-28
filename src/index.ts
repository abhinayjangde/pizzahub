import app from "./app.js";
import { Config } from "./config/index.js";

const startServer = async () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => console.log(`listenint on port: ${PORT}`));
    } catch (err) {
        console.error(err);
    }
};

startServer();
