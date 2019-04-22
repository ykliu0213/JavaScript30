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
    * 回傳符合條件的元素組成的新的陣列  
    * 語法為： `var newArray = arr.filter(callback[, thisArg]) `
    
        ```javascript
        const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
        ```
* map()  
    * 回傳透過函式內回傳的值組合成的新的陣列
    
        ```javascript
        const fullName = inventors.map((inventor) => inventor.first + ' ' + inventor.last);
        ```
* sort()
    * 回傳符合條件排序後的陣列（原陣列，sort並不會產生新陣列）  
    * 語法為： `arr.sort([compareFunction])`
    
        ```javascript
        const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
        ```
* reduce()  
    * 將目前陣列中的所有元素做累加的運算  
    * 語法為： `arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)`
    
        ```javascript
        const totalYear = inventors.reduce((total,inventor) => {
            return total + (inventor.passed - inventor.year);
        },0);
        ```
#### 其他
* Array.from()
    * 從類陣列或可迭代物件建立一個新陣列  
    
        ```javascript
        Array.from(category.querySelectorAll('a'));
        // querySelectorAll 回傳的是一個 NodeList，因此需透過 Array.from 轉成 Array
        ```
* console.table()
    * 將陣列以表格的方式印出來（出現在瀏覽器的console）  
    
        ```javascript
        console.table(fifteen);
        // fifteen 為一個陣列
        ```
## 05 - Flex Panel Gallery
* `display: flex;`
    * Flex 排版的大致定義，是能更改該項目的長與（或）高，以便貼合任何顯示設備的空間。
    * 由 container 和 items 所組成。
![image](https://github.com/ykliu0213/JavaScript30/blob/master/README_img/flex.png)
* `flex-direction`
    * 改變 container 內部的軸線方向，分別有水平、水平反轉、垂直、垂直反轉四種。
![image](https://github.com/ykliu0213/JavaScript30/blob/master/README_img/flex-direction.png)
* `flex-wrap`
    * 超出範圍時是否換行
* `flex: flex-grow flex-shrink flex-basis`
    * flex-grow、flex-shrink 數值為相對概念。
        * 大於0時會縮放以及分配剩餘空間
        * flex: 5 為 flex: 1 的五倍大（One value, unitless number: flex-grow）
        * flex-grow 決定分配剩餘比例
* `justify-content align-items`
    * justify-content：主軸對齊的設定
    * align-items：交錯軸對齊的設定
* `classList.toggle( class )`
    * 參數為要切換的 class name，如果該 class 不存在，則添加；反之，則移除。
* `transitionend`
    * 在 transition 結束時會觸發

## 06 - Type Ahead
* `fetch`
    * 讓開發者能夠用更簡潔的語法取得非同步資料（可替代XMLHttpRequest）
    * `fetch`回傳的是 promise 物件
    * 可以透過 `.json()` 將回傳值轉程json格式，這是 response 的prototype 的 method
* [Promise](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)
    * `.then()`： Callback 用 .then 來添加，達成在非同步運算結束後才呼叫。

        ```javascript
        fetch(url)
            .then(blob => blob.json())
            .then(data => cities.push(...data))
        ```
    * `...data` 分割 data
    * `.push(...data)` 可將回傳陣列裡的物件分割開再個別放進目標陣列裡面
* new RegExp(wordToMatch, 'gi')
    * RegExp物件的建構式。（正規表達式）
    * `'g'`：global. 找全部符合的
    * `'i'`：insensitive. 忽略大小寫
* 監聽事件
    * change：當 `input`、`select`、`textarea`、`radio`、`checkbox` 等表單元素被改變時觸發。 但與 `input` 事件不同的是，`input` 事件會在輸入框輸入內容的當下觸發，而 `change` 事件則是在目前焦點離開輸入框後才觸發。
    * keyup：「放開」鍵盤時觸發。
        * 若此時想要知道使用者按下的按鍵，則可以透過 `event.keyCode` 屬性來查詢。
        * [keyCode](https://gist.github.com/tylerbuchea/8011573 ) 的對應表

* 把 Array 裡面我們要的物件轉成 HTML
    * `.map()`：回傳透過函式內回傳的值組合成的新的陣列。
    * `.join()`：將陣列或一個類陣列物件中所有的元素連接、合併成一個字串，並回傳此字串。

* 數字加分隔號
    ```javascript
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    ```








