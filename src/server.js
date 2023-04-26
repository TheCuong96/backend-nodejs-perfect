const express = require("express");
const routers = require("./routes/web");

const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// const hostname = process.env.HOSTNAME;
//2 thằng dưới đây dùng để compile code lại code js mà ta có thể hiểu và sử dụng được ở node mỗi khi có data được bắn qua lại giữa server và client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
const connection = require("./config/databaseConnectPool");

connection.query("SELECT * FROM Users u", function (err, results, fiedls) {
    console.log("results", results);
});
app.use("/", routers);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
