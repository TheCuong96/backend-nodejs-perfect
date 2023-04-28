const express = require("express");
let routerAPI = express.Router();

const {
    getUserAPI,
    postCreateUserAPI,
    putEditUserAPI,
    deleteUserAPI,
    postFileAPI,
} = require("../controllers/apiControllers");

const {
    postCreateCustomerAPI,
    postCreateListCustomerAPI,
    getListCustomerAPI,
} = require("../controllers/apiCustomerControllers");

//dưới đây là khai báo route
routerAPI.get("/customers-many", getListCustomerAPI);
routerAPI.post("/customers-many", postCreateListCustomerAPI);
routerAPI.post("/customers", postCreateCustomerAPI);

routerAPI.post("/file", postFileAPI);
routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putEditUserAPI);
routerAPI.delete("/users", deleteUserAPI);
module.exports = routerAPI;
