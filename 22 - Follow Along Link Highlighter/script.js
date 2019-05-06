
// 取得HTML中所有的a元素
const triggers = document.querySelectorAll('a');
// 建立一個span來放置highlight效果
const highlight = document.createElement('span');
highlight.classList.add('highlight');
// 將建立的span加到頁面中
document.body.append(highlight);

function highlightLink() {
    // 取得this(由a.addEventListener傳入，所以會是該a)的資訊
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    // 建立一個coords物件來存放會使用的寬高與位置資訊
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    // 設定highlight效果的寬高及位置
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

// 監聽所有a元素的滑鼠移入，觸發highlightLink
triggers.forEach( a => a.addEventListener('mousemove', highlightLink));

