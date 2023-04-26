let getHomepage = async (req, res) => {
    res.render("home.ejs");
};
let getSamplepage = async (req, res) => {
    res.render("sample.ejs"); // vì ở trên ta đã setup ở thử mục views rồi, nên ở đây ta chỉ cần gọi tên file ejs ra mà dùng thôi
};

let postCreateUser = async (req, res) => {
    console.log("req", req.body);
    res.send("create user");
};
module.exports = {
    getHomepage,
    getSamplepage,
    postCreateUser,
};
