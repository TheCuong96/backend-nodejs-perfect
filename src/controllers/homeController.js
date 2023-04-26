const connection = require("../config/databaseConnectPool");
let getHomepage = async (req, res) => {
    res.render("home.ejs");
};
let getSamplepage = async (req, res) => {
    res.render("sample.ejs"); // vì ở trên ta đã setup ở thử mục views rồi, nên ở đây ta chỉ cần gọi tên file ejs ra mà dùng thôi
};

// let postCreateUser = (req, res) => {
//     let { name, email, city } = req.body;
//     connection.query(
//         `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
//         [email, name, city],
//         function (err, results) {
//             console.log("results", results);
//             return res.redirect("/");
//         }
//     );
// };

let postCreateUser = async (req, res) => {
    let { name, email, city } = req.body;
    await connection.execute(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    );
    return res.redirect("/");
};
module.exports = {
    getHomepage,
    getSamplepage,
    postCreateUser,
};
