
const nav = document.querySelector('#main');
// 透過 offsetTop 取得 nav 頂部到整個 page 的頂部距離
let topOfNav = nav.offsetTop;

function fixNav() {
    // 如果目前捲軸的高度高過於 nav 的頂部
    if (window.scrollY >= topOfNav) {
        /* 設定一個 padding-top 並增加 fixed-nav
            因為當 position 被設定為 fixed 時，將不會再佔據原有的高度
            所以要動態的增加一個 offsetHeight 來將內容部位增高避免怪異的彈跳遮擋現象  */
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        // 還原 padding-top 並移除 fixed-nav
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

// 監聽 scroll 動作
window.addEventListener('scroll',fixNav);




