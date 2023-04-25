const express = require("express");
let routers = express.Router();

//dưới đây là khai báo route
routers.get("/", (req, res) => {
    res.send("Hello World!");
});

//dưới đây là khai báo route
routers.get("/sample", (req, res) => {
    res.render("sample"); // vì ở trên ta đã setup ở thử mục views rồi, nên ở đây ta chỉ cần gọi tên file ejs ra mà dùng thôi
});

module.exports = routers;
