const left = document.querySelector('.left');
const right = document.querySelector('.right');
const leftImg = left.querySelector('img');
const rightImg = right.querySelector('img');
const cText=document.getElementById("coke")
const pText=document.getElementById("pepsi")

const body = document.body;
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    leftImg.style.transform = 'scale(2)';
    rightImg.style.transform = 'scale(1)';
    body.style.background = 'linear-gradient(to right, #d6001c, red, #0033a0)';
    cText.style.fontSize=5+"rem";
    pText.style.fontSize=2+"rem";

});

right.addEventListener('mouseenter', () => {
    rightImg.style.transform = 'scale(2)';
    leftImg.style.transform = 'scale(1)';
    body.style.background = 'linear-gradient(to right, #d6001c, blue, #0033a0)';
        pText.style.fontSize=5+"rem";
        cText.style.fontSize=2+"rem";


});

container.addEventListener('mouseleave', () => {
    leftImg.style.transform = 'scale(1.5)';
    rightImg.style.transform = 'scale(1.5)';
    body.style.background = 'linear-gradient(to right, #d6001c, white, #0033a0)';
    pText.style.fontSize=4+"rem";
    cText.style.fontSize=4+"rem";

});
