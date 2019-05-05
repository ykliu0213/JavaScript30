const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300; // 設定一偏差基礎值為 300px

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // 透過解構賦值取得並設定資訊（效果同上面兩行）
    const { offsetWidth: width , offsetHeight: height} = hero;
    let { offsetX: x , offsetY: y} = e;

    
    // 雖然我們使用mousemove監聽的對象是hero
    // 但如果該對象有children也會觸發，所以透過e.target來篩選觸發對象
    // 篩選完觸發對象後，再作處理：如果在目標區域外，則在加上目標座標值
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // 四捨五入調整最終偏移值
    const xWalk = Math.round(( x / width * walk) - ( walk / 2 ));
    const yWalk = Math.round(( y / height * walk) - ( walk / 2 ));

    // 使用textShadow來設定文字陰影
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0px rgba(255, 0, 255, 0.5),
    ${xWalk * -1}px ${yWalk}px 0px rgba(0, 255, 255, 0.5),
    ${yWalk}px ${xWalk * -1}px 0px rgba(0, 255, 0, 0.5),
    ${yWalk * -1}px ${xWalk}px 0px rgba(0, 0, 255, 0.5)
    `
}

hero.addEventListener('mousemove', shadow);
