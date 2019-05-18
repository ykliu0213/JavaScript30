
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// 隨機地鼠出現後存在時間，傳入最小&最大值，回傳一個區間亂數
function randTime(min , max) {
    return Math.round(Math.random() * (max - min) + min);
}

// 隨機地鼠出現的洞
function randomHole(holes) {
    // 取得地鼠洞數量區間內隨機一個洞
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    // 避免連續骰到相同的
    if(hole === lastHole) {
        console.log('Ah nah thats the same one bud')
        return randomHole(holes);
    }
    // 紀錄最後一個出現的地鼠洞
    lastHole = hole;
    return hole;
}


function peep() {
    const time = randTime(200,2000);
    const hole = randomHole(holes);
    // 增加出現的動畫class
    hole.classList.add('up');
    // 移除已槌標記
    hole.querySelector('.mole').classList.remove('bonked');
    // 設定存在時間到的時候移除出現動畫，且如果遊戲時間未結束就繼續跑下一隻
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
    },time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    // 設定十秒後把時間押為結束
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    // isTrusted防止腳本操作，class有bonked代表已被搥過，若符合上述兩者則不進行
    if(!e.isTrusted || this.classList.contains('bonked')) return; // cheater!
    // 替被打到的地鼠加上bonked的樣式避免連續點擊得分
    this.classList.add('bonked'); 
    // 打到就移除出現的動畫
    this.parentNode.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click',bonk));