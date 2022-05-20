"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var app = express();
app.use(express.static("../client/public"));
app.get("", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
app.listen(8080, function () {
    console.log("Server started on Port: 8080");
});
