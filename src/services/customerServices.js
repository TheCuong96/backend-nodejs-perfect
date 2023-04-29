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

const getListCustomerService = async (limit, page, findKey) => {
    try {
        if (limit && page) {
            let offset = (page - 1) * limit;
            if (findKey) {
                const filter = Object.fromEntries(
                    Object.entries(findKey).map(([key, value]) => [
                        key,
                        { $regex: ".*" + value + ".*" },
                    ])
                );
                return await Customer.find({
                    // name: { $regex: ".*" + name + ".*" }, //đây là cách find data theo giá trị của key name, lưu ý là nếu ko có offset và litmit thì nó không ko tìm được name data vì ko có limit & page thì sẽ không chạy vô đây
                    ...filter,
                })
                    .skip(offset)
                    .limit(limit)
                    .exec();
            } else {
                return await Customer.find({}).skip(offset).limit(limit).exec();
            }
        } else {
            return await Customer.find();
        }
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

const deleteCustomerService = async (id) => {
    console.log("id", id);
    try {
        return await Customer.deleteById(id); // deleteById là phương thức của mongoose-delete, ta phải dùng nó thì mới xóa mềm được, còn dùng của mongoose thì nó sẽ xóa thẳng vào data và mất luôn
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

const deleteManyCustomerService = async (ids) => {
    console.log("ids", ids);
    try {
        return await Customer.delete({ _id: { $in: ids } }); // delete là phương thức của mongoose-delete, ta phải dùng nó thì mới xóa mềm được, còn dùng của mongoose thì nó sẽ xóa thẳng vào data và mất luôn, đây là cách xóa nhiều data dựa theo id của data
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
    deleteCustomerService,
    deleteManyCustomerService,
};
