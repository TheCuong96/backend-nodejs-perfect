const connection = require("../config/databaseConnectPool");

const { getAllUsers } = require("../services/CRUDServices");

let getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { dataUser: results });
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
    let [results, fields] = await connection.execute(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    );
    console.log("results", results);
    return res.redirect("/");
};

let getCreatePage = async (req, res) => {
    return res.render("create.ejs");
};

let getEditPage = async (req, res) => {
    // lấy data cần edit từ server bằng id
    let id = req.params.id;
    console.log("id", id);
    let [user] = await connection.execute("Select * from Users where id = ?", [
        id,
    ]);
    console.log("user", user[0]);
    return res.render("edit.ejs", { dataUser: user[0] });
};
module.exports = {
    getHomepage,
    getSamplepage,
    postCreateUser,
    getCreatePage,
    getEditPage,
};
