const uploadSingleFiles = require("../services/fileServives");
const {
    createCustomerService,
    createListCustomerService,
} = require("../services/customerServices");

module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
            // return res.status(400).send("no files ware uploaded.");
        } else {
            let result = await uploadSingleFiles(req.files.image);
            console.log("result", result);
            imageUrl = result.detail[0].path;
        }

        console.log("imageUrl", imageUrl);
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl,
        };
        let customer = await createCustomerService(customerData);
        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },
    postCreateCustomerxx: async (req, res) => {
        const { customers } = req.body;
        let ListDataCustomers = await createListCustomerService(customers);
        if (ListDataCustomers) {
            return res.status(200).json({
                EC: 0,
                data: ListDataCustomers,
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: ListDataCustomers,
            });
        }
    },
};
