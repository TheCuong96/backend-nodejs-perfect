const connection = require("../config/databaseConnectPool");
const getAllUsers = async () => {
    const [results, fields] = await connection.execute("SELECT * FROM Users");
    return results;
};

module.exports = { getAllUsers };
