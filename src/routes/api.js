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
    updateCustomerAPI,
    deleteCustomerAPI,
    deleteManyCustomerAPI,
} = require("../controllers/apiCustomerControllers");

const {
    postCreateProjectAPI,
    getAllProjectAPI,
} = require("../controllers/apiProjectControllers");

//dưới đây là khai báo route
routerAPI.get("/project", getAllProjectAPI);
routerAPI.post("/project", postCreateProjectAPI);
// cách viết api để đọc query-params
// params thì ta phải xác định key trước
// query thì không cần xác định trươc,1 điều này giúp ta có thể truyền data tùy biến dễ dàng hơn
// http://localhost:8081/v1/api/read-params/cuong/hcm
routerAPI.get("/read-params/:name/:address", (req, res) => {
    console.log("req.params", req.params);
    return res.status(200).json({
        // => "data": { "name": "cuong", "address": "hcm"}
        data: req.params,
    });
});

//http://localhost:8081/v1/api/read-query?name=cuong&email=thecuong1896@gmail.com
routerAPI.get("/read-query", (req, res) => {
    console.log("req.query", req.query);
    return res.status(200).json({
        // => "data": { "name": "cuong", "email": "thecuong1896@gmail.com"}
        data: req.query,
    });
});

routerAPI.delete("/customers-many", deleteManyCustomerAPI);
routerAPI.delete("/customers", deleteCustomerAPI);
routerAPI.put("/customers", updateCustomerAPI);
routerAPI.get("/customers-many", getListCustomerAPI);
routerAPI.post("/customers-many", postCreateListCustomerAPI);
routerAPI.post("/customers", postCreateCustomerAPI);

routerAPI.post("/file", postFileAPI);
routerAPI.get("/users", getUserAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putEditUserAPI);
routerAPI.delete("/users", deleteUserAPI);
module.exports = routerAPI;
