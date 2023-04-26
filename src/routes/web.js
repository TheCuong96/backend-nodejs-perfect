const express = require("express");
let routers = express.Router();

const {
    getHomepage,
    getSamplepage,
    postCreateUser,
    getCreatePage,
    getEditPage,
} = require("../controllers/homeController");
//dưới đây là khai báo route

routers.get("/edit-user/:id", getEditPage);
routers.get("/create", getCreatePage);
routers.get("/sample", getSamplepage);
routers.post("/create-user", postCreateUser);
routers.get("/", getHomepage);
module.exports = routers;
