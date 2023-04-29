
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

## biết sử dụng noSql mongodb để lưu trữ dữ liệu, mongodb là cách lưu trữ noSql, noSql là cách khắc phục những khó khăn mà sql đem lại chứ ko phải thay thế hay là khác hoàn toàn sql

## biết sử dụng docker để quản lý database là mongodb

> Docker là một nền tảng phần mềm dùng để đóng gói, triển khai và quản lý các ứng dụng trong một môi trường độc lập với hệ điều hành và phần cứng thật. Các ứng dụng và dịch vụ được đóng gói thành các container, chứa tất cả các thành phần cần thiết để chạy trên bất kỳ nền tảng nào hỗ trợ Docker.

Các lợi ích của việc sử dụng Docker bao gồm:

> Khả năng di động: Docker cho phép đóng gói và chia sẻ các ứng dụng dễ dàng, đồng thời giúp tăng tính đồng nhất và di động cho các ứng dụng.

Hiệu suất: Vì các container được chạy trên một môi trường độc lập, vì vậy các ứng dụng chạy trong các container thường có hiệu suất tốt hơn so với việc chạy trực tiếp trên hệ điều hành.

Đơn giản hóa quá trình triển khai: Docker giúp đơn giản hóa quá trình triển khai ứng dụng bằng cách đóng gói toàn bộ ứng dụng và các thành phần liên quan vào một container.

> Tích hợp và phát triển dễ dàng: Với Docker, các nhà phát triển có thể dễ dàng tích hợp các ứng dụng vào các dịch vụ khác nhau, đồng thời cung cấp môi trường phát triển ổn định.

Tuy nhiên, việc sử dụng Docker cũng có một số nhược điểm, bao gồm:

> Tốn tài nguyên: Mỗi container yêu cầu tài nguyên riêng, vì vậy nếu bạn chạy nhiều container trên cùng một máy tính, máy tính của bạn sẽ phải xử lý nhiều tài nguyên hơn.

Quản lý khó khăn: Với nhiều container chạy trên cùng một hệ thống, việc quản lý chúng có thể trở nên phức tạp.

> Khó khăn trong việc chia sẻ dữ liệu: Vì các container được đóng gói và chạy độc lập, việc chia sẻ dữ liệu giữa các container có thể trở nên phức tạp hơn so với việc chia sẻ dữ liệu trực tiếp giữa các ứng dụng chạy trên cùng một máy

## biết sử dụng mongodb compass để quản lý dữ liệu,
## biết sử dụng framework mongoose để sử dụng các method tương tác với noSql mongodb trong server

## biết viết API CRUD từ số ít đến số nhiều 

## biết viết API upload files ảnh từ số ít đến số nhiều
## biết viết API cách xóa mềm (delete soft)
- là cách xóa data ở client nhưng data ở server của ta vẫn còn lưu trữ

