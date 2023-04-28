const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
    console.log("customerData", customerData);
    try {
        return await Customer.create({ ...customerData });
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

module.exports = { createCustomerService };
