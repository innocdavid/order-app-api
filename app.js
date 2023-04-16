import express from "express";
import menuRoute from "./routes/menuRouter.js";


const app = express();

app.use('/api/menu', menuRoute);

app.listen(8080, () => {
    console.log("server listening from port 8080");
})