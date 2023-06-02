// import modules
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import categoryRoute from "./routes/categoryRoute.js";
import dishRoute from "./routes/dishRouter.js";
import coverImageRoute from "./routes/coverImageRoute.js";
import swaggerDocs from "./config/swagger.js"
import dbConnection from "./config/db.js";
import dotenv from "dotenv";
import express from "express";

// instance
const app = express();
dotenv.config();
dbConnection()


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms".bgBlue));

app.use("/api/dishes", dishRoute);
app.use("/api/cover-images", coverImageRoute);
app.use("/api/categories", categoryRoute);

if (process.env.NODE_ENV !== "test") {
    // server listening
    app.listen(process.env.PORT, () => {
        console.log(`server listening from ${process.env.HOST}:${process.env.PORT}`.bgYellow);
        swaggerDocs(app, process.env.PORT)
    });
}


export default app;