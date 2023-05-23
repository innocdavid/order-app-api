// import modules
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import menuRoute from "./routes/menuRouter.js";
import coverImageRoute from "./routes/coverImageRoute.js";
import swaggerDocs from "./config/swagger.js"
import express from "express";

// instance
const app = express();
const PORT = 8080;
const HOST = 'localhost';

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'.bgBlue));

app.use('/api/items', menuRoute);
app.use('/api/cover-images', coverImageRoute);

if (process.env.NODE_ENV !== 'test') {
    // server listening
    app.listen(PORT, () => {
        console.log(`server listening from ${HOST}:${PORT}`.bgYellow);
        swaggerDocs(app, PORT)
    });
}


export default app;