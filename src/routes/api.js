const express = require("express");
let routerAPI = express.Router();

const {
    getUserAPI,
    postCreateUserAPI,
    putEditUserAPI,
} = require("../controllers/apiControllers");
//dưới đây là khai báo route

routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putEditUserAPI);
module.exports = routerAPI;
