
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    // 取得觸發點位置（滑鼠位於整頁頂端的Y軸定位-speed框到整頁頂端的距離
    const y = e.pageY - this.offsetTop;
    // 設定百分比(y / speed框的高度)
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    // 取得播放速率(最低0.4倍速，最多4倍速)
    const playbackRate = percent * (max - min) + min;
    // 調整speed-bar的樣式高度
    bar.style.height = height;
    // 用toFixed(2)來設定最多取得小數點後兩位，顯示於speed-bar上
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // 控制影片的速率
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);





