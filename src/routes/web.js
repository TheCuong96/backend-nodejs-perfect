const express = require("express");
let routers = express.Router();

const {
    getHomepage,
    getSamplepage,
    postCreateUser,
} = require("../controllers/homeController");
//dưới đây là khai báo route
routers.get("/", getHomepage);
routers.get("/sample", getSamplepage);
routers.post("/create-user", postCreateUser);

module.exports = routers;
