// Variables
const infoImg = document.getElementById('imgInfo');
const image = document.getElementById('myimage');
const info = document.getElementById('proInfo');

function hideInfoMouseOut() {
    if (info.style.display !== 'none') {
        info.style.display = 'none';
    }
}

function appearInfoMouseOver() {
    if (hideInfoMouseOut) {
        info.style.display = 'block';
        info.style.backgroundColor = 'rgba(255,255,0,0.6)';
        info.style.color = 'black';
    }
}

function imageblur() {
    image.style.filter = 'blur(5px)';
}

function imageNormal() {
    image.style.filter = 'none';
}

function imageEffect(action1, action2) {
    infoImg.addEventListener("mouseover", action1);
    infoImg.addEventListener("mouseout", action2);
}

// Try
function blurImgAppearInfo(firstFun, secFun, thirdFun, action1, action2) {
    hideInfoMouseOut();
    firstFun();
    secFun();
    thirdFun(action1, action2);
}

// Fin Try

function mouseOver() {
    infoImg.addEventListener("mouseover", appearInfoMouseOver);
}

function mouseOut() {
    infoImg.addEventListener("mouseout", hideInfoMouseOut);
}

// Call Function!
blurImgAppearInfo(mouseOver, mouseOut, imageEffect, imageblur, imageNormal);
