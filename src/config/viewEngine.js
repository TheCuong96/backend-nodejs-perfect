const express = require("express");
const path = require("path");

const configViewEngine = (app) => {
    app.use(express.static(path.join("./src", "public"))); // những file tĩnh, hay còn hiểu là những file hầu như ko thay đổi, mà hầu như ko thay đổi thì ko có gì phải dấu diếm, cho nên ta có thể public những file này cho người dùng có thể lấy được nó thoải mái

    app.set("view engine", "ejs"); // thằng này để nó xác định rằng các view engine, còn gọi cách khác là các code html mà node có thể đọc được là phải thông qua file có đuôi là ejs
    app.set("views", path.join("./src", "views")); // thằng này để xác định rằng những view UI ta viết bằng html sẽ được đọc trong thư mục(folder) là views bất kể nó nằm ở đâu
};
module.exports = configViewEngine;
