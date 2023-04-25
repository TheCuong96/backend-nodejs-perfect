const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
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
