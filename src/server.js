const express = require("express");
const routers = require("./routes/web");
const routerAPI = require("./routes/api");
const connection = require("./config/databaseConnectMongodb");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const fileUpload = require("express-fileupload");

const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.use(fileUpload());
// const hostname = process.env.HOSTNAME;
//2 thằng dưới đây dùng để compile code lại code js mà ta có thể hiểu và sử dụng được ở node mỗi khi có data được bắn qua lại giữa server và client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
app.use("/", routers);

app.use("/v1/api/", routerAPI);

(async () => {
    try {
        // using mongoose
        // await connection();

        // using mongodb
        const url = process.env.DB_HOST_WITH_DRIVER;
        const dbName = process.env.DB_NAME;
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("customers");
        // collection.insertOne({ address: "hcm", email: "thecuong@gmail.com" });
        // collection.insertOne({ address: [1, 2, 3] });
        let a = await collection.findOne({ address: "hcm" });
        console.log("find", a);
        
        console.log("Connected successfully to server");
        app.listen(port, () => {
            console.log(`backend zore listening on port ${port}`);
        });
    } catch (error) {
        console.log("error connect to DB", error);
    }
})();
