
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name=text]').value;

// 取得語系資訊 
function populateVoices() {
    voices = this.getVoices();
    // 將所有語系塞進下拉選單中
    voicesDropdown.innerHTML = voices
    // 使用filter篩選出包含zh及en的語系
    .filter( voice => voice.lang.includes('zh') || voice.lang.includes('en'))
    // 篩選後的array透過map把資料組成html
    .map( voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
    // 用join來合併
    .join('');
}

// 設定選擇的語系
function setVoice() {
    msg.voice = voices.find( voice => voice.name === this.value);
}

// 播放切換，透過預設 true 來讓 start 和 stop 能透過一個 function 完成
function toggle( startOver = true ) {
    speechSynthesis.cancel();
    if(startOver) {
        speechSynthesis.speak(msg);
    }
}

// 設定設定語速和音頻
function setOption() {
    msg[this.name] = this.value;
    toggle();
}

// 監聽語音清單變更選項後進行語系清單的更新
speechSynthesis.addEventListener('voiceschanged',populateVoices);
// 監聽語系選單，選擇後切換語系
voicesDropdown.addEventListener('change',setVoice);
// 監聽速率跟音準控制條，移動後設定
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click',toggle);
stopButton.addEventListener('click',toggle.bind(null , false));

