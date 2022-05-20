import * as path from "path";

const express = require("express")
const app = express()

app.use(express.static("../client/public"))

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

app.listen(8080, () => {
    console.log("Server started on Port: 8080");
})