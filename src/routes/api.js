const express = require("express");
let routerAPI = express.Router();

const {
    getUserAPI,
    postCreateUserAPI,
} = require("../controllers/apiControllers");
//dưới đây là khai báo route

routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", postCreateUserAPI);
module.exports = routerAPI;
