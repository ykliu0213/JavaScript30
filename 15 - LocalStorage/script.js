const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkAllBtn = document.querySelector('.checkAll');

function addItem(e) {
    // 加上preventDefault()避免每次submit都會重整網頁
    e.preventDefault();
    // '[name=item]' 底下的 value 才是使用者輸入的值
    const text = this.querySelector('[name=item]').value;
    // 宣告新增要存入的物件：輸入的文字與是否勾選的狀態(done)
    const item = {
        text: text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));

    // 清空輸入框
    this.reset();
}

// ES6可在function中的參數直接設定參數預設值
function populateList(plates = [], platesList) {
    // 使用map搭配join來組成字串，並顯示在html的清單ul中
    platesList.innerHTML = plates.map((plate,i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
                <span data-index=${i}>delete<span>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    // 初始化一個存檔狀態
    let save = false;
    // 取得checkbox的data-index值
    const el = e.target;
    const index = el.dataset.index;
    
    // 偵測觸發元素，如果是input則切換checkbox狀態
    if (el.matches('input')){
        // 利用！來使done的狀態在true/false間切換
        items[index].done = !items[index].done;
        save = true;
    }
    // 偵測觸發元素，如果是span則透過splice刪除該物件
    if(el.matches('span')){
        items.splice(index, 1);
        save = true;
    }
    // 確定有更改到checkbox或刪除到物件才繼續
    if(save){
        // 將更新後的狀態寫入localStorage中
        localStorage.setItem('items', JSON.stringify(items));
        // 更新列表
        populateList(items, itemsList);
    }
}

function checkAll(e) {
    // 取得觸發當下全選按鈕是否已勾選
    const checkStatus = e.target.checked;
    // 透過迴圈將每個item的checkbox狀態改為與全選checobox狀態相同
    items.forEach(index => {
        index.done = checkStatus;
    });

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone);
checkAllBtn.addEventListener('click', checkAll);

populateList(items, itemsList);