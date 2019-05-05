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
    * 回傳符合條件的元素組成的新的陣列。（過濾陣列內的元素，並回傳過濾後的新陣列）  
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
* `...`
    * 展開運算子和其餘運算子。
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
## 07 - Array Cardio Day 2
* `.some()`
    * 檢查陣列中是否至少有一個元素符合條件。
    * 語法：`arr.some(callback[, thisArg]);` 

        ```javascript
        const isAdult = people.some(person => ((new    Date()).getFullYear()) - person.year >= 19);
        ```
* `.every()`
    * 檢查陣列中的全部元素是否都符合條件。
    * 語法：`arr.every(callback[, thisArg])`

        ```javascript
        const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
        ```
* `.find()`
    * 回傳陣列中第一個符合條件的元素，若無符合對象則回傳`undefined`。
    * 語法：`arr.find(callback[, thisArg])`

        ```javascript
        const comment = comments.find(comment => comment.id === 823423);
        ```
* `.findIndex()`
    * 回傳陣列中第一個符合條件的元素索引，若無符合對象則回傳`-1`。
    * 語法：`arr.findIndex(callback[, thisArg])`

        ```javascript
        const index = comment.findIndex(comment => comment.id === 823423);
        ```
* `.splice()`
    * 透過刪除既有元素並/或加入新的元素來改變原本陣列的內容。
    * 語法：`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

        ```javascript
        comment.splice(index, 1);
        ```
* `.slice()`
    * 回傳一個新的陣列物件，為原陣列選擇之`begin`到`end`部分的 shallow copy（不包含`end`）
    * 語法：`arr.slice([begin[, end]])`

        ```javescript
        const newComments = [...comments.slice(0, index),...comments.slice(index + 1)];
        ```
* Shallow copy **vs** Deep copy
    * `Shallow copy`：只複製某個物件的reference，與原物件共用同一塊記憶體。
    * `Deep copy`：創造一個一模一樣的新物件，與原物件分別用不同塊記憶體。

## 08 - Fun with HTML5 Canvas

* Canvas 大小
    * 設定 canvas 寬跟高為整個視窗

        ```javascript
        const canvas = document.querySelector('#draw');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ```
    * JS 取得視窗大小
        * `window.innerWidth` `window.innerHeight`
* Canvas func
    * strokeStyle
        * 勾勒圖形時用的顏色
    * fillStyle
        * 填滿圖形時用的顏色
    * lneJoin
        * 線條和線條間接合處的樣式
    * lineCap
        * 線條結尾的樣式
    * lineWidth
        * 線條寬度
    * 繪圖

        ```javascript
        // start drawing
        ctx.beginPath();
        // start from
        ctx.moveTo(lastX, lastY);
        // go to
        ctx.lineTo(e.offsetX, e.offsetY);
        // draw
        ctx.stroke();
        ```
* [Destructuring Assignment](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    * `[X, Y] = [X_value, Y_value];
* [hsl color](https://www.w3schools.com/colors/colors_hsl.asp)
    * `hsl(hue, saturation, lightness)`
    * hue = 0~360
    * saturation = 0~100%
    * lightness = 0~100%

## 09 - Dev Tools Domination
* Chrome dev tools
    * 在元素上按右鍵 => break on => attribute modification
    
* console func
    * `console.log()`
        * 印出一段字串
        * `%s` => 變數加入字串 （現在大多被 [`Template literals`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals) 取代）

            ```javascript
            console.log('Hello I am a %s string!', '💩');
            ```
        * `%c` => 加入CSS設定

            ```javascript
            console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');
            ```
    * `console.warn()`
        * 印出一段警告訊息
    * `console.error()`
        * 印出一段錯誤訊息
    * `console.info()`
        * 印出以驚嘆號開頭的訊息
    * `console.assert()`
        * 判斷第一個參數是否為真，false 的話丟出 error 並印出相應訊息

            ```javascript
            console.assert(p.classList.contains('ouch'), 'That is wrong!');
            ```
    * `console.clear()`
        * 清空 console 區域
    * `console.dir()`
        * 印出查看對象的屬性
    * `console.group()`
        * 印出樹狀結構，配合 groupCollapsed 以及 groupEnd 方法
        * `console.group()` / `console.groupCollapsed()` + `console.log()` *n + `console.groupEnd()`
        
            ```javascript
            dogs.forEach(dog => {
            console.groupCollapsed(`${dog.name}`);
            console.log(`This is ${dog.name}`);
            console.log(`${dog.name} is ${dog.age} years old`);
            console.log(`${dog.name} is ${dog.age * 7} dog years old`);
            console.groupEnd(`${dog.name}`);
            });
            ```
    * `console.count()`
        * 以參數為標識記錄調用的次數，調用時在控制台打印標識以及調用次數。
        * `console.countReset()` ： 重置計數器
    * `console.time()`
        * 計時器
        * `console.time()` + `console.timeEnd()`
        
            ```javascript
            console.time('fetching data');
            fetch('https://api.github.com/users/wesbos')
              .then(data => data.json())
              .then(data => {
                console.timeEnd('fetching data');
                console.log(data);
              });
            ```
    * `console.table()`
        * 將列表型的數據印成表格

## 10 - Hold Shift and Check Checkboxes

* 偵測使用者 shift 鍵的輸入
    * `e.shiftKey`
    
* `querySelectorAll()`
    * `input[type="checkbox"]`

        * 指定特定type的 input tag

* `inBetween`
    * 透過 Boolean 變數來判斷使否在選取範圍內

        ```javascript
        if(checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween;
        }
        ```

## 11 - Custom Video Player

* html `<video>` tag
    * 自動撥放：`autoplay`
    * 影片是否暫停：`video.paused`
    * 影片當前時間：`video.currentTime`
    * 影片總長時間：`video.duration`
    * 播放：`video.play()`
    * 暫停：`video.pause()`
    * 監聽：`video.addEventListener('play'/'pause'/'timeupdate')`
        * 和其他 node 添加 listener 的方式相同
    * `video[method]`
        * 類似於 `video.play()`，但無法寫成 `video.method()`，因為會變成呼叫 `video` 底下的 function method
* `querySelector`
    * 不只能從 document 中選取元素，也可從 node 中選取元素。

        ```javascript
        const player = document.querySelector('.player');
        const video = player.querySelector('.viewer');
        ```
    * 除了可以用 class 來當 selector，也可以使用 attribute 當 selector。
        ```javascript
        const skipButtons = player.querySelectorAll('[data-skip]');
        ```
* 實作全螢幕
    * [MDN-Fullscreen API
](https://developer.mozilla.org/zh-TW/docs/Web/API/Fullscreen_API)

* 利用 `&&` 運算子特性簡單實現 `if statement`

    ```javascript
    (e) => mousedown && scrub(e))
    ```
* [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
    * 取消事件（如果事件可以取消）
    * 這次的情況是由於在網頁瀏覽器中按下空白，預設會將網頁捲到底部，那希望取消此一預設，就會用到這個 function
    
        ```javascript
        e.preventDefault();
        ```

## 12 - Key Sequence Detection
        
* `.splice()`
    * 語法：`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
    * start 若為負，則從最後一個元素往前數（-1 開始）

        ```javascript
        pressed.splice(-secretCode.length -1 , pressed.length - secretCode.length)
        ```

# 13 - Slide in on Scroll

* `debounce(func, wait = 20, immediate = true)`
    * Scroll 事件觸發太頻繁，每次滾動頁面都會有大量事件觸發，因此需要限制單位時間內觸發頻率
    * 監聽事件也因此改成這樣：`window.addEventListener('scroll', debounce(checkSlide));`
    * [Lodash](https://homura0731.github.io/post/2018/09/lodash-debounce/) 函式庫有現成的可以使用
* 高度計算
  * `Window.scrollY`
    * 目前瀏覽器視窗已滾動的Y軸（垂直位置），視窗最上緣離網頁最上緣的距離。
    * [MDN-Window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)
  * `Window.innerHeight`
    * 目前瀏覽器視窗的高度
    * [MDN-Window.innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)
  * `HTMLElement.offsetTop`
    * 返回指定元素相對於有父元素(offsetParent)中的頂端位置，元素最上緣與父元素最上緣的距離
    * [HTMLElement​.offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)

# 14 - JavaScript References VS Copying

* JavaScript 原始型態 (Primitive Type)
  1. strings
  2. numbers
  3. booleans
  4. null 
  5. undefine

  * **Call by value**
    * 原始型別都是 Call by value，當複製時不影響彼此
        ```javascript
        let age = 100;
        let age2 = age;
        console.log(age, age2); // 100 100
        age = 200;
        console.log(age, age2); // 200 100
        ```
    * 最初的`age2 = age`使 age2 指向與 age 同一個記憶體位置(存放 numbers : 100)，而當`age = 200`時， age 建立了一個新的記憶體位置存放 numbers : 200，並指向該位置。

* copy 陣列的四種方法
    ```javascript
    const team2 = players.slice();

    const team3 = [].concat(players);

    const team4 = [...players];

    const team5 = Array.from(players);
    ```

* copy 物件的三種方法
    ```javascript
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });

    const cap3 = { ...person };

    const dev2 = JSON.parse(JSON.stringify(wes));
    ```

  * 上述三者中只有 `JSON.parse(JSON.stringify(wes))` 能實現 Deep clone，其餘兩種皆只能 copy 一層。（差別在巢狀結構的處理）


# 15 - LocalStorage

* `Enter` 提交
  * 可透過 submit 事件監聽 `Enter` 鍵，再加上 `e.preventDefault()` 取消原本跳轉頁面來完成。
  * 此作法不須再額外監聽`keyup`事件

    ```javascript
    addItems.addEventListener('submit', (e) => {
        e.preventDefault();
        // 自行添加功能
    })
    ``` 
* `<form>`
  * 透過`.value`存取 form 裡面的 input

    ```javascript
    const text = this.querySelector('[name=item]').value;
    ```
  * `this.reset()`：清空輸入框

* `<label>`
  * 生成 checkbox 同時透過 `id` => `for` 作連結

    ```javascript
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
    <label for="item${i}">${plate.text}</label>
    <span data-index=${i}>delete<span> 
    ```
  * CSS 操作
    * 先將預設的 `checkbox` => `display: none`，隱藏原本的框框
    * 再透過 `input:checked` + `label:before` 在`checkbox`生成的時候控制變化
  
        ```css
        .plates input {
            display: none;
        }

        .plates input + label:before {
            content: '⬜️';
            margin-right: 10px;
        }

        .plates input:checked + label:before {
            content: '🌮';
        }
        ```

* Local Storage
  * 設定、拿取、移除

    ```javascript
    localStorage.setItems('key', 'value');
    localStorage.getItem('key');
    localStorage.remove('key');
    ```

  * 儲存在 Local Storage 的 value 會被強制轉成 String，所以在儲存前就要先做處理
    ```javascript
    localStorage.setItem('items', JSON.stringify(items));
    ```
  * 同理，從 Local Storage 拿出來 value 時需作型態轉換才能使用
    ```javascript
    // 若 Local Storage 中有 value 則存到 items中，若無則設定為空陣列
    const items = JSON.parse(localStorage.getItem('items')) || [];
    ```

* event delegation
  * 把監聽事件放在外層元素，讓內層新增的元素也可以被監聽
  * 透過 `e.target.matches('yourTarget')` 指定要使用的元素

# 16 - Mouse Move Shadow

* html attribute
  * `contenteditable`：使元素內容可以編輯

    ```html
    <h1 contenteditable>🔥WOAH!</h1>
    ```

* 解構賦值 ( Destructuring assignment ) 
  * 可以直接把物件/陣列中的值塞入變數中

    ```javascript
    const { offsetWidth: width , offsetHeight: height} = hero;
    // 效果同以下兩行
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    ```
* 鼠標位置 ( cursor position )
  * `offsetX`：鼠標位置相對於元素的X座標（距離元素左邊）
  * `offsetY`：鼠標位置相對於元素的Y座標（距離元素上邊）
  * **注意**：是相對於元素，而不是整個 page！

* Math 進位
  * 和多數語言一樣有`Math.round`、`Math.ceil`、`Math.floor`三種
  * `Math.round`：四捨五入
  * `Math.ceil`：無條件進位
  * `Math.floor`：無條件捨去

* Css
  * textShadow，可同時給予多個值，產生出多個影子效果。

    ```javascript
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0px rgba(255, 0, 255, 0.5),
    ${xWalk * -1}px ${yWalk}px 0px rgba(0, 255, 255, 0.5),
    ${yWalk}px ${xWalk * -1}px 0px rgba(0, 255, 0, 0.5),
    ${yWalk * -1}px ${xWalk}px 0px rgba(0, 0, 255, 0.5)
    `
    ```

# 17 - Sort Without Articles

* RegExp
  * 比對字串最前面是否有'a'、'the'、'an'的部分
  * 在正則中`(a )`與`(a)`是不同的，若只使用`(a)`會將開頭為'a'的單字的字母'a'也取代掉

    ```javascript
    function strip(bandName) {
        return bandName.replace(/^(a |the |an )/i, '').trim();
    }
    ```
  * [`trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
    * 用來去除字串前後的空白，此方法並不會改變原來的字串，而是傳回一個新的字串。

* 將陣列內容轉成HTML（前面章節有使用過）
  * `map()`
  * `join()`

# 18 - Adding Up Times with Reduce

* NodeList to Array
  * 注意！ querySelectorAll拿到的是NodeList
  * 可使用 Array.from() 或 [...] 將 NodeList 轉成 array

    ```javascript
    // Array.from()
    const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
    // spread operator
    const timeNodes = [...document.querySelectorAll('[data-time]')];
    ```

* `map()`
  * 可在`map`中直接使用 function！

    ```javascript
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    //等同於
    const [mins, secs] = timeCode.split(':').map(function(str){
        return parseFloat(str);
    });
    ```

















