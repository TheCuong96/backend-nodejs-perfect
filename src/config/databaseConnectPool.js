const mysql = require("mysql2");
require("dotenv").config();

// createPool có hỗ trợ cache cho ta, để tránh người dùng reload page liên tục và server phải trả lại dữ liệu liên tục, nên sử dụng createPool để có thể dùng pool.execute để nó lưu trữ data đệm lại khi bị gọi nhiều lần mà cùng 1 data giống nhau
// nói ngắn gọn là nó tái sử dụng các connection trước đó rồi, nên sẽ ko connection một lần nữa nếu data trùng nhau
// thằng pool còn là 1 trung gian giúp quá trình connect database của ta không bị sập khi có quá nhiều connect cùng 1 lúc, nó sẽ chờ đợi và xử lý từng connect 1 đến khi xử lý hết connect, thì khi làm như vậy, quá trình connection của ta sẽ không bị sập mà chỉ lâu hơn 1 chút

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true, //Nếu tất cả các kết nối đến cơ sở dữ liệu đang được sử dụng, tùy chọn này cho phép thêm các kết nối mới vào hàng đợi đến khi một kết nối khả dụng. Khi một kết nối khả dụng, nó sẽ được lấy ra khỏi hàng đợi và sử dụng để thực hiện các yêu cầu đến cơ sở dữ liệu.
    connectionLimit: 10, //Đây là giới hạn số lượng kết nối tối đa được tạo đồng thời đến cơ sở dữ liệu. Giá trị 10 cho thấy rằng tại một thời điểm, chỉ có tối đa 10 kết nối đến cơ sở dữ liệu được phép. Các kết nối được quản lý và tái sử dụng để giảm thiểu việc tạo kết nối mới liên tục.
    queueLimit: 0, //Đây là giới hạn số lượng yêu cầu đang chờ trong hàng đợi. Nếu giá trị này là 0, nghĩa là không giới hạn số lượng yêu cầu đang chờ. Nếu hàng đợi đầy, các yêu cầu mới sẽ bị từ chối và trả về lỗi.
});

module.exports = connection;
