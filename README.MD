
## 

"scripts": {
     "start": "nodemon src/server.js" `viết như vậy để dùng nodemon, dùng nodemon để xử lý auto start lại server mỗi khi lưu code`
},

"express": "4.17.1", `thằng này để hỗ trợ giao tiếp trong nodejs`
"body-parser": "1.19.0", `thằng này để biến đổi data lại json hoặc 1 data mà ta đọc được mỗi khi ta truy xuất data mà không đọc được`
"ejs": "3.1.6", `Thằng này để cho mình viết code html mà phối hợp với javascript trong đo`
"@babel/core": "7.15.5", 
"@babel/node": "7.15.4",
"@babel/preset-env": "7.15.6", `thằng này để cho phép ta dùng es6 được trong project này`
"nodemon": "2.0.12" `thằng này để server auto re-render mỗi khi ta update hay save lại code`
 "dotenv": "16.0.3" `để ta có thể sử dụng file .env trong nodejs`
 "mysql2": "2.3.0" `dùng để connect db`