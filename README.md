# JavaScript30

### 01 - JavaScript Drum Kit
* querySelector : 尋找符合條件的元素
    <pre><code> document.querySelector(`audio[data-key="${event.keyCode}"]`) </pre></code>
    * 像這裡就是透過`audio[data-key="${event.keyCode}"]`來找到 data-key 符合的 audio 。  

* classList : 在js中控制某元素的class列表
    * `add()` : 新增class
    * `remove()` : 刪除class
* transitionend : 在 CSS transition 結束後觸發
    * 搭配 class.remove() 可以做出按鍵被按之後的閃爍效果
