function initialize() {
    const items = getItems();
    addCommas(items);
}

// Hàm lấy tất cả các mục trong danh sách
function getItems() {
    return document.querySelectorAll('#item-list .item');
}

// Hàm thêm dấu phẩy sau mỗi mục trừ mục cuối cùng
function addCommas(items) {
    for (let i = 0; i < items.length; i++) {
        if (i < items.length - 1) {
            items[i].textContent += ',';
        }
    }
}

// Lắng nghe sự kiện DOMContentLoaded và gọi hàm initialize
document.addEventListener("DOMContentLoaded", initialize);