
const slider = document.querySelector('.items');
let isDown = false;
let startX
let scrollLeft;

// 滑鼠按下
slider.addEventListener('mousedown', (e) => {
    // 給予按下的flag
    isDown = true;
    // 加上抓取效果樣式（active的class）
    slider.classList.add('active');
    // 設定移動的初始值為目前頁面距離-當前item左邊距
    startX = e.pageX - slider.offsetLeft;
    // 設定目前捲軸的左距
    scrollLeft = slider.scrollLeft;
});
// 滑鼠滑出範圍
slider.addEventListener('mouseleave', () => {
    // 將按下的flag與class移除
    isDown = false;
    slider.classList.remove('active');
});
// 滑鼠放開
slider.addEventListener('mouseup', () => {
    // 將按下的flag與class移除
    isDown = false;
    slider.classList.remove('active');
});
// 滑鼠移動
slider.addEventListener('mousemove', (e) => {
    // 若移動時的狀態非按下，不作動
    if(!isDown) return; // stop the fn from running
    // 避免觸發預設事件（滑鼠按下且移動的預設是選取範圍）
    e.preventDefault();
    // 設定X（當前定位）為目前頁面距離-當前item左邊距
    const x = e.pageX - slider.offsetLeft;
    // 設定移動距離為 X-初始值
    const walk = (x - startX) * 3;
    // 設定水平捲軸的偏移量
    slider.scrollLeft = scrollLeft - walk;
});




