// Bắt sự kiện khi người dùng thay đổi loại phương trình từ combobox
document.getElementById('loaiPT').addEventListener('change', function() {
    const loaiPT = this.value;  // Lấy giá trị loại phương trình (linear hoặc quadratic) từ combobox
    const formPT_b1 = document.getElementById('formPT_b1');  // Truy cập đến form phương trình bậc 1
    const formPT_b2 = document.getElementById('formPT_b2');  // Truy cập đến form phương trình bậc 2

    // Hiển thị form phương trình bậc 1 hoặc bậc 2 tùy vào loại phương trình được chọn
    if (loaiPT === 'PT_b1') {
        formPT_b1.style.display = 'block';  // Hiển thị form phương trình bậc 1
        formPT_b2.style.display = 'none';  // Ẩn form phương trình bậc 2
    } else {
        formPT_b1.style.display = 'none';  // Ẩn form phương trình bậc 1
        formPT_b2.style.display = 'block';  // Hiển thị form phương trình bậc 2
    }
});

// Bắt sự kiện khi người dùng nhấn nút giải phương trình bậc 1 (ax + b = 0)
document.getElementById('solvePT_b1').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('HeSo_A').value);  // Lấy hệ số a từ input
    const b = parseFloat(document.getElementById('HeSo_B').value);  // Lấy hệ số b từ input
    let result = '';  // Biến lưu kết quả

    // Xử lý trường hợp phương trình vô số nghiệm hoặc vô nghiệm
    if (a === 0 && b === 0) {
        result = 'Phương trình vô số nghiệm';  // a = 0, b = 0 thì phương trình có vô số nghiệm
    } else if (a === 0) {
        result = 'Phương trình vô nghiệm';  // a = 0 nhưng b khác 0 thì phương trình vô nghiệm
    } else {
        const x = -b / a;  // Tính nghiệm của phương trình
        result = `Nghiệm của phương trình là: x = ${x.toFixed(2)}`;  // Hiển thị nghiệm với 2 chữ số thập phân
    }

    document.getElementById('KQ_b1').innerText = result;  // Hiển thị kết quả ra màn hình
});

// Bắt sự kiện khi người dùng nhấn nút giải phương trình bậc 2 (ax² + bx + c = 0)
document.getElementById('solvePT_b2').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('HeSo_A').value);  // Lấy hệ số a từ input
    const b = parseFloat(document.getElementById('HeSo_B').value);  // Lấy hệ số b từ input
    const c = parseFloat(document.getElementById('HeSo_C').value);  // Lấy hệ số c từ input
    let result = '';  // Biến lưu kết quả

    // Nếu a = 0, không phải là phương trình bậc 2
    if (a === 0) {
        result = 'Đây không phải là phương trình bậc 2';  // Không phải phương trình bậc 2 nếu a = 0
    } else {
        const delta = b * b - 4 * a * c;  // Tính delta để xác định số nghiệm
        if (delta < 0) {
            result = 'Phương trình vô nghiệm';  // Phương trình vô nghiệm nếu delta < 0
        } else if (delta === 0) {
            const x = -b / (2 * a);  // Phương trình có nghiệm kép nếu delta = 0
            result = `Phương trình có nghiệm kép: x = ${x.toFixed(2)}`;  // Hiển thị nghiệm kép với 2 chữ số thập phân
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);  // Tính nghiệm thứ nhất khi delta > 0
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);  // Tính nghiệm thứ hai khi delta > 0
            result = `Phương trình có hai nghiệm: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;  // Hiển thị hai nghiệm với 2 chữ số thập phân
        }
    }

    document.getElementById('KQ_b2').innerText = result;  // Hiển thị kết quả ra màn hình
});
