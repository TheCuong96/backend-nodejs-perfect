const express = require("express");
const routers = require("./routes/web");

const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
// const hostname = process.env.HOSTNAME;

configViewEngine(app);

app.use("/", routers);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
