// Hàm khởi tạo được gọi khi sự kiện DOMContentLoaded xảy ra
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


// room

const buyBtns = document.querySelectorAll('.js-buy-ticket')   
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
function showBuyTickets(){
    modal.classList.add('open')
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    //
    buyBtn.addEventListener('click', showBuyTickets)
} 

modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
// modalClose.addEventListener('click', hideBuyTickets)