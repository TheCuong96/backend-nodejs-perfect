const express = require("express");
let routers = express.Router();

const {
    getHomepage,
    getSamplepage,
    postCreateUser,
    getCreatePage,
    getEditPage,
    postSubmitEditUser,
} = require("../controllers/homeController");
//dưới đây là khai báo route

routers.post("/submit-edit", postSubmitEditUser);
routers.get("/edit-user/:id", getEditPage);
routers.get("/create", getCreatePage);
routers.get("/sample", getSamplepage);
routers.post("/create-user", postCreateUser);
routers.get("/", getHomepage);
module.exports = routers;
