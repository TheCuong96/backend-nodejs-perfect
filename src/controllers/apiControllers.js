const User = require("../models/user");

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
module.exports = {
    getUserAPI,
    postCreateUserAPI,
    putEditUserAPI,
    deleteUserAPI,
};
