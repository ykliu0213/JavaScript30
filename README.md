# JavaScript30

## 01 - JavaScript Drum Kit
* `querySelector` : 尋找符合條件的元素
    ```js
    document.querySelector(`audio[data-key="${event.keyCode}"]`)
    ```
    * 像這裡就是透過`audio[data-key="${event.keyCode}"]`來找到 data-key 符合的 audio 。  

* `classList` : 在js中控制某元素的class列表
    * `add()` : 新增class
    * `remove()` : 刪除class
* `transitionend` : 在 CSS transition 結束後觸發
    * 搭配 `class.remove()` 可以做出按鍵被按之後的閃爍效果

## 02 - JS and CSS Clock
* `transform` : CSS屬性，能旋轉、傾斜、縮放變形box。
    * 在此用來模擬指針旋轉。
    * rotate() : 旋轉多少degree
    
* `transform-origin` : CSS屬性，更改基準點，參數為座標。

* `transition-timing-function` : CSS屬性，改變動畫變換的速度。
    * 在此用來製造指針擺動的效果。

* `setInterval( func , time )` : 設定間隔，每隔固定time執行一次function。

## 03 - CSS Variables

* HTML input tag
    * range : 控制滑桿（slide control）
    * color : 顏色選擇器（color picker）

* CSS 變數
    * 宣告變數
        * 透過 `:root` 在root level
        * 透過 `--var_name:` 來宣告變數
        ```css
        :root {
        --spacing: 10px;
        --blur: 10px;
        --base: #bf37dd;
        }
        ```
    * 使用變數
        * 透過 `var(--var_name)` 使用
        ```css
        img {
        padding: var(--spacing);
        background: var(--base);
        filter: blur(var(--blur));
        }
        ```
* JS 操作CSS變數
    * `querySelectorAll()` : 得到的是一個 NodeList 不是 Array
    * `const suffix` : 取得在 html tag 中設定好的後綴詞（如 px ）
    * `--${this.name}` : 取得當前發生變動 tag 的 name，並呼叫相同 name 的 css 變數。
    
        ```javascript
        const inputs = document.querySelectorAll('.controls input');

        function handleUpdate() {
          const suffix = this.dataset.sizing || '';
          document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        }

        inputs.forEach(input => input.addEventListener('change', handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
        ```
* HTML 設定 dataset
    * `data-sizing` : 設定 sizing 的屬性到 dataset 中
    
        ```html
        <label for="blur">Blur:</label>
        <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
        ```
## 04 - Array Cardio Day 1
#### Array.prototype function
* filter()  

    `回傳符合條件的元素組成的新的陣列`  
    `語法為： var newArray = arr.filter(callback[, thisArg]) `
    ```javascript
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    ```
* map()  

    `回傳透過函式內回傳的值組合成的新的陣列`  
    ```javascript
    const fullName = inventors.map((inventor) => inventor.first + ' ' + inventor.last);
    ```
* sort()

    `回傳符合條件排序後的陣列（原陣列，sort並不會產生新陣列）`  
    `語法為： arr.sort([compareFunction])`
    ```javascript
    const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
    ```
* reduce()  

    `將目前陣列中的所有元素做累加的運算`  
    `語法為： arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)`
    ```javascript
    const totalYear = inventors.reduce((total,inventor) => {
        return total + (inventor.passed - inventor.year);
    },0);
    ```
#### 其他
* Array.from()

    `從類陣列或可迭代物件建立一個新陣列`  
    ```javascript
    Array.from(category.querySelectorAll('a'));
    // querySelectorAll 回傳的是一個 NodeList，因此需透過 Array.from 轉成 Array
    ```
* console.table()

    `將陣列以表格的方式印出來（出現在瀏覽器的console）`
    ```javascript
    console.table(fifteen);
    // fifteen 為一個陣列
    ```














