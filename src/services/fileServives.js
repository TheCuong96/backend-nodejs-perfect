const fs = require("fs");
const path = require("path");

const uploadSingleFiles = async (filesArray) => {
    const dirPath = path.join(process.cwd(), "/src/public/images"); // tạo 1 đường dẫn đến thư mục có tên pictures, dùng process.cwd() trỏ đến src của ta,còn __dirname trỏ đến thư mục mà nó đang đứng,nên sẽ phải fix lại mỗi khi đem đoạn code này đi chỗ khác, nên ta dùng process.cwd() để không cần phải fix lại
    if (!fs.existsSync(dirPath)) {
        // Kiểm tra nếu thư mục chưa tồn tại, thì tự động tạo 1 thư mục mới có tên theo đường dẫn mà ta đã setup
        fs.mkdirSync(dirPath);
    }
    try {
        let fileAll = filesArray;
        if (!Array.isArray(fileAll)) {
            fileAll = [fileAll];
        }
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < fileAll.length; i++) {
            const element = fileAll[i];
            const extFile = path.extname(element.name); // lấy đuôi file ra
            const nameFile = path.basename(element.name, extFile); // nếu chỉ truyền tham số thứ 1 thì lấy đầy đủ tên file,truyền tham số thứ 2 dùng để loại bỏ đuôi file nếu trùng
            const finalName = `${nameFile}-${Date.now()}${extFile}`; // lấy tên file gắn thêm timestamp để tạo sự khác nhau giữa 2 file khi upload lên 2 lần cùng 1 file, nếu không nó sẽ khi đè lên file cũ
            const finalPath = `${dirPath}/${finalName}`; // lấy tên file gắn thêm timestamp để tạo sự khác nhau giữa 2 file khi upload lên 2 lần cùng 1 file, nếu không nó sẽ khi đè lên file cũ
            try {
                await element.mv(finalPath);
                resultArr.push({
                    status: "success",
                    path: finalName,
                    fileName: element.name,
                    error: null,
                });
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: "failed",
                    path: null,
                    fileName: element.name,
                    error: JSON.stringify(err),
                });
            }
        }
        return { countSuccess: countSuccess, detail: resultArr };
    } catch (error) {
        console.log("error", error);
    }
};

module.exports = uploadSingleFiles;
