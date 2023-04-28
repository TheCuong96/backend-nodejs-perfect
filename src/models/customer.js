const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // nghĩa là data sẽ và được ép thành kiểu String, và giới hạn lưu trữ là 255 ký tự
        description: String,
        image: String,
        address: String,
        phone: String, // trường này sẽ tự động lấy giá trị của name đến biến đổi nó lại và unique dùng để xử lý việc trùng giá trị, nó sẽ tự động gắn thêm để không bị trùng dữ liệu
        email: String,

        // createdAt: { type: Date, default: Date.now }, // nghĩa là data sẽ và được ép thành kiểu Date, và sẽ được lấy mặc định là thời gian hiện tại mà nó được chọn để chạy
        // updateAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true, // thằng này được nâng cấp từ phiên bản mới hơn rồi, nó sẽ đại diện cho 2 trường createdAt và updateAt tạo sẵn ra cho ta
    }
);

module.exports = mongoose.model("Customer", customerSchema);
