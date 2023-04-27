const connection = require("../config/databaseConnectPool");

// const { getAllUsers } = require("../services/CRUDServices");
const User = require("../models/user");

let getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render("home.ejs", { dataUser: results });
};
let getSamplepage = async (req, res) => {
    res.render("sample.ejs"); // vì ở trên ta đã setup ở thử mục views rồi, nên ở đây ta chỉ cần gọi tên file ejs ra mà dùng thôi
};

let postCreateUser = async (req, res) => {
    let { name, email, city } = req.body;
    await User.create({ name, email, city });
    return res.redirect("/");
};

let getCreatePage = async (req, res) => {
    return res.render("create.ejs");
};

let getEditPage = async (req, res) => {
    let { id } = req.params;
    let user = await User.findById(id).exec();
    return res.render("edit.ejs", { dataUser: user });
};
let postSubmitEditUser = async (req, res) => {
    // gửi data lên server để cập nhật lại data
    await User.updateOne({ _id: req.body.id }, { ...req.body });
    return res.redirect("/");
};

let postDeleteUser = async (req, res) => {
    let userId = req.body.userId;
    await connection.execute("delete from Users where id = ?", [userId]);
    return res.redirect("/");
};

module.exports = {
    getHomepage,
    getSamplepage,
    postCreateUser,
    getCreatePage,
    getEditPage,
    postSubmitEditUser,
    postDeleteUser,
};
