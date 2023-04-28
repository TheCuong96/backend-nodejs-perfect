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
    postCreateCustomer,
    postCreateCustomerxx,
} = require("../controllers/customerControllers");

//dưới đây là khai báo route
routerAPI.post("/customers-many", postCreateCustomerxx);
routerAPI.post("/customers", postCreateCustomer);

routerAPI.post("/file", postFileAPI);
routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putEditUserAPI);
routerAPI.delete("/users", deleteUserAPI);
module.exports = routerAPI;
