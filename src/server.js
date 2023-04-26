const express = require("express");
const routers = require("./routes/web");

const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
// const hostname = process.env.HOSTNAME;

configViewEngine(app);
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3307,
    database: "hoidanit",
    password: "123456",
});

connection.query("SELECT * FROM Users u", function (err, results, fiedls) {
    console.log("results", results);
    console.log("fiedls", fiedls);
});
app.use("/", routers);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
