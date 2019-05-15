
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    // 印出當前div的class name
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // 預設為false
    once: true
}));

button.addEventListener('click', () => {
    console.log('Click!!!');
}, {
    once: true
});








