# React Day 41: Xây dựng E-commerce App với Redux Architecture Pattern

# Sửa bài

1. Chưa sử dụng biến môi trường .env trong http => Cách dùng: import.meta.env.VITE_BASE_URL ✅
2. Chưa kiểm tra mode/NODE_ENV để quyết định có bật logger hay không ✅
    - Gợi ý: Có thể sử dụng import.meta.env.MODE/import.meta.env.NODE_ENV, nếu nó mang giá trị là "development" thì thêm logger
    - Ở đây ko cần biến trong file .env mà vite sẽ tự hiểu là đang ở môi trường nào
3. Loại bỏ các console.log không cần thiết ✅
4. Chú ý ngữ pháp khi sử dụng biến, tên hàm cho đúng mục đích. VD: useProduct => useProducts vì hook lấy ra danh sách products ✅
5. Chưa xử lý lỗi khi có thao tác bất đồng bộ với API ✅
6. Thêm dispatch loading khi gọi dữ liệu ✅
7. Sử dụng navigate(-1) giúp quay lại trang trước, và có thể sử dụng nút forward ở trình duyệt để quay lại trang sau ✅
    - Còn sử dụng navigate('/products') thì nút forward sẽ ko thể quay lại trang sau
