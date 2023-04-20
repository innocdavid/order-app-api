// import modules
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import menuRoute from "./routes/menuRouter.js";
import express from "express";

// instance
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'.bgBlue));

app.use('/api/menu', menuRoute);

if (process.env.NODE_ENV !== 'test') {
    // server listening
    app.listen(8080, () => {
        console.log("server listening from port 8080".bgYellow);
    });
}


export default app;