const express = require("express");
let routerAPI = express.Router();

const {
    getUserAPI,
    postCreateUserAPI,
    putEditUserAPI,
    deleteUserAPI,
} = require("../controllers/apiControllers");
//dưới đây là khai báo route

routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putEditUserAPI);
routerAPI.delete("/users", deleteUserAPI);
module.exports = routerAPI;
