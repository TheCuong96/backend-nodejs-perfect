const express = require("express");
const routers = require("./routes/web");

const connection = require("./config/databaseConnectMongodb");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// const hostname = process.env.HOSTNAME;
//2 thằng dưới đây dùng để compile code lại code js mà ta có thể hiểu và sử dụng được ở node mỗi khi có data được bắn qua lại giữa server và client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connection();
configViewEngine(app);
app.use("/", routers);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
