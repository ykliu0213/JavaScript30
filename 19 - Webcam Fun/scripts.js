const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    // 取得user的視訊裝置，回傳promise狀態
    navigator.mediaDevices.getUserMedia({
        video: true ,
        audio: false
    })
    // 如果允許則把回傳的MediaStream寫進html的video tag中並撥放
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    })
    // 當失敗時作錯誤處理
    .catch(err => {
        console.log(`Oh No!! ${err}`);
    });
}

function paintToCanvas() {
    // 設置寬跟高
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    // 用setInterval來持續取得目前的影像資訊

    return setInterval(() => {
        // 在canvas中設置內容來源與video相同，並且長寬也跟隨video
        ctx.drawImage(video, 0, 0, width, height);

        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // mess with them
        // pixels = redEffect(pixels);

        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.8;

        // pixels = greenScreen(pixels);
        // put them back
        ctx.putImageData(pixels, 0, 0);

    }, 16)
}

function takePhoto() {
    // 拍照音效 => 把音效切到第0秒並播放
    snap.currentTime = 0 ;
    snap.play();
    // 利用toDataURL把canvas的內容轉為base64的圖檔資訊
    const data = canvas.toDataURL('image/jpeg');
    // 用createElemamnt來建立一個新的a元素
    const link = document.createElement('a');
    // 設置連結位置為轉圖檔後的base64位置
    link.href = data;
    // 設置連結為下載
    link.setAttribute('download', 'photo');
    // 內部新增一個預覽圖
    link.innerHTML = `<img src="${data}" alt="photo" />`;
    // 在圖片區塞入新圖片（在第一筆的位置）
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    // 透過迴圈將取回的所有像素資料跑一次，i +=4 是因為四個一組(r,g,b,alpha）
    for( let i = 0 ; i < pixels.data.length ; i += 4 ){
        // 下面組合就是單純把R(紅色)增強達到紅色濾鏡的效果
        pixels.data[i + 0] = pixels.data[i + 0] + 200; //Red
        pixels.data[i + 1] = pixels.data[i + 1] - 50;  //Green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //Blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];
    
        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}


getVideo();

video.addEventListener('canplay',paintToCanvas);
