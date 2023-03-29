import express from "express";
import orders from "./orders.js"

const app = express();

app.get("/", (req, res) => {
    res.json(orders)
});

app.listen(8080, () => {
    console.log("server listening from port 8080");
})