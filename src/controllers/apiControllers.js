const User = require("../models/user");
const uploadSingleFIle = require("../services/fileServives");
let getUserAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};
let postCreateUserAPI = async (req, res) => {
    let { name, email, city } = req.body;
    let results = await User.create({ name, email, city });
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

let putEditUserAPI = async (req, res) => {
    // gửi data lên server để cập nhật lại data
    let results = await User.updateOne({ _id: req.body.id }, { ...req.body });
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};

let deleteUserAPI = async (req, res) => {
    let result = await User.deleteOne({ _id: req.body.userId });
    console.log("result delete", result);
    return res.status(200).json({
        errorCode: 0,
        data: result,
    });
};

// postFileAPI
let postFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("no files ware uploaded.");
    }
    console.log("req.files.image", req.files.image);
    let result = await uploadSingleFIle(req.files.image);
    console.log("result", result);
    return res.send("ok single");
};
module.exports = {
    getUserAPI,
    postCreateUserAPI,
    putEditUserAPI,
    deleteUserAPI,
    postFileAPI,
};
