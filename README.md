# JavaScript30

### 01 - JavaScript Drum Kit
* `querySelector` : 尋找符合條件的元素
    <pre><code> document.querySelector(`audio[data-key="${event.keyCode}"]`) </pre></code>
    * 像這裡就是透過`audio[data-key="${event.keyCode}"]`來找到 data-key 符合的 audio 。  

* `classList` : 在js中控制某元素的class列表
    * `add()` : 新增class
    * `remove()` : 刪除class
* `transitionend` : 在 CSS transition 結束後觸發
    * 搭配 `class.remove()` 可以做出按鍵被按之後的閃爍效果

### 02 - JS and CSS Clock
* `transform` : CSS屬性，能旋轉、傾斜、縮放變形box。
    * 在此用來模擬指針旋轉。
    * rotate() : 旋轉多少degree
* `transform-origin` : CSS屬性，更改基準點，參數為座標。
* `transition-timing-function` : CSS屬性，改變動畫變換的速度。
    * 在此用來製造指針擺動的效果。
* `setInterval( func , time )` : 設定間隔，每隔固定time執行一次function。
