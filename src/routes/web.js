const express = require("express");
let routers = express.Router();

const { getHomepage, getSamplepage } = require("../controllers/homeController");
//dưới đây là khai báo route
routers.get("/", getHomepage);
routers.get("/sample", getSamplepage);

module.exports = routers;
