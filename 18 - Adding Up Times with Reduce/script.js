
// 可使用 Array.from() 或 [...] 將 NodeList 轉成 array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// seconds => 所有video總秒數
const seconds = timeNodes
    // 取出每個元素中的data-time資料
    .map(node => node.dataset.time)
    .map(timecode => {
        // 用解構賦值的方式分別取出split(':')後的分與秒
        // 再透過一個map執行parseFloat將字串轉數值
        const [mins , secs] = timecode.split(':').map(parseFloat);
        // 回傳這組資料轉換後的總秒數
        return (mins * 60) + secs;
    })
    // 用reduce來加總每次執行結果
    .reduce((total , vidSeconds) => total + vidSeconds);

// 利用取得的總秒數來進行總共時分秒的計算
// 使用Math.floor取整數，再利用%來操作餘數
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours}:${mins}:${secondsLeft}`);