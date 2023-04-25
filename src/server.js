const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
// const hostname = process.env.HOSTNAME;

app.use(express.static(path.join(__dirname, "public"))); // những file tĩnh, hay còn hiểu là những file hầu như ko thay đổi, mà hầu như ko thay đổi thì ko có gì phải dấu diếm, cho nên ta có thể public những file này cho người dùng có thể lấy được nó thoải mái

app.set("view engine", "ejs"); // thằng này để nó xác định rằng các view engine, còn gọi cách khác là các code html mà node có thể đọc được là phải thông qua file có đuôi là ejs
app.set("views", path.join(__dirname, "views")); // thằng này để xác định rằng những view UI ta viết bằng html sẽ được đọc trong thư mục(folder) là views bất kể nó nằm ở đâu

//dưới đây là khai báo route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//dưới đây là khai báo route
app.get("/sample", (req, res) => {
    res.render("sample"); // vì ở trên ta đã setup ở thử mục views rồi, nên ở đây ta chỉ cần gọi tên file ejs ra mà dùng thôi
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
