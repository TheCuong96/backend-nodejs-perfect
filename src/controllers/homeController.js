let getHomepage = async (req, res) => {
    res.send("Hello World!");
};
let getSamplepage = async (req, res) => {
    res.render("sample"); // vì ở trên ta đã setup ở thử mục views rồi, nên ở đây ta chỉ cần gọi tên file ejs ra mà dùng thôi
};

module.exports = {
    getHomepage,
    getSamplepage,
};
