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

const createListCustomerService = async (customerData) => {
    try {
        return await Customer.insertMany(customerData);
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

const getListCustomerService = async () => {
    try {
        return await Customer.find();
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

const updateCustomerService = async (dataUpdate) => {
    try {
        return await Customer.updateOne(
            { _id: dataUpdate.id },
            { ...dataUpdate }
        );
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

module.exports = {
    createCustomerService,
    createListCustomerService,
    getListCustomerService,
    updateCustomerService,
};
