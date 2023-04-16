// import modules
import colors from "colors";
import morgan from "morgan";
import menuRoute from "./routes/menuRouter.js";
import express from "express";

// instance
const app = express();

// MIDDLEWARE
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'.blue));

app.use('/api/menu', menuRoute);

app.listen(8080, () => {
    console.log("server listening from port 8080".yellow);
})