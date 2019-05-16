
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// 滑鼠移入事件
function handleEnter() {
    // 在觸發的li上加上trigger-enter的class
    this.classList.add('trigger-enter');
    // 當移入時，先檢查是否有trigger-enter這個className
    // 若有的話在150毫秒後新增trigger-enter-active這個class
    setTimeout( () => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    // 在白色滑動背景新增open這個class
    background.classList.add('open');

    // 取得滑入元素底下的dropdown
    const dropdown = this.querySelector('.dropdown');
    // 取得這個dropdown的定位與大小資訊
    const dropdownCoords = dropdown.getBoundingClientRect();
    // 取得nav的定位與大小資訊
    const navCoords = nav.getBoundingClientRect();
    
    // 設定將要給白色滑動背景使用的定位與大小資訊
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        // 要減去nav的定位，避免上方區塊增加時造成的錯位
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    // 設定白色滑動背景的定位與大小
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// 滑鼠移出事件
function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

// 為每個選單加上滑鼠移入/移出事件監聽
triggers.forEach( trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach( trigger => trigger.addEventListener('mouseleave',handleLeave));



