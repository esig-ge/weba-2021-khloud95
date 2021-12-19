// Constants

// Utiliser le concept de DOM et chercher les éléments par l'ID
const infoImg = document.getElementById('imgInfo');
const image = document.getElementById('myimage');
const info = document.getElementById('proInfo');

// Fonctions

// Une fonction pour cacher la description de produit1
function hideInfoMouseOut() {
    if (info.style.display !== 'none') {
        info.style.display = 'none';
    }
}

// Une fonction pour faire apparaître
// la description en mettant la souris sur le produit
function appearInfoMouseOver() {
    // je vérifie si la description est bien cachée
    if (hideInfoMouseOut) {
        info.style.display = 'block';
        info.style.backgroundColor = 'rgba(255,255,0,0.6)';
        info.style.color = 'black';
    }
}

// Une fonction pour mettre un effect sur l'image
// qaund on met la souris sur l'image
function imageblur() {
    image.style.filter = 'blur(5px)';
}

// Une fonction pour enlever l'effet de l'image
// et de le rendre normal
function imageNormal() {
    image.style.filter = 'none';
}

// Une fonction pour utiliser 2 effect sur l'image
function imageEffect(action1, action2) {
    infoImg.addEventListener("mouseover", action1);
    infoImg.addEventListener("mouseout", action2);
}

// Une fonction d'ordre supérieur qui regroupe plusieurs fonctions
function blurImgAppearInfo(firstFun, secFun, thirdFun, action1, action2) {
    hideInfoMouseOut();
    firstFun();
    secFun();
    thirdFun(action1, action2);
}

// Une fonction qui va utiliser l'addEventListener mouseOver
function mouseOver() {
    infoImg.addEventListener("mouseover", appearInfoMouseOver);
}

// Une fonction qui va utiliser l'addEventListener mouseOver
function mouseOut() {
    infoImg.addEventListener("mouseout", hideInfoMouseOut);
}

// Une fonction qui va regrouper toutes les fonctions (CallBack Functions)
blurImgAppearInfo(mouseOver, mouseOut, imageEffect, imageblur, imageNormal);
