

//scroll animation

window.addEventListener('scroll', scrollFn);
window.addEventListener('load', scrollFn);

let scrollBox = document.querySelectorAll('.scrollAni');

let animationStartLine = 200;

function scrollFn()
{
    for(let i = 0; i < scrollBox.length; i++)
    {
        if(scrollBox[i].getBoundingClientRect().top + animationStartLine < window.innerHeight)
        {
            scrollBox[i].classList.add('show');
        }
    }
}




//flip animation

let cardA = document.getElementById('card01');
let cardAline = document.getElementById('cardLine01');
let cardAtext = document.getElementById('cardText01');
let cardAimg = document.getElementById('cardImg01');

cardA.addEventListener('mouseover', () => {
    cardAtext.classList.add('opacity1');
    cardAtext.classList.remove('none');
    cardAimg.classList.add('opacity0');
    cardAimg.classList.remove('opacity1');
    cardAline.classList.add('rotateRight');
    cardAline.classList.remove('rotateLeft');
});

cardA.addEventListener('mouseout', () => {
    cardAtext.classList.remove('opacity1');
    cardAtext.classList.add('opacity0');
    cardAtext.classList.remove('scale0');
    cardAimg.classList.remove('opacity0');
    cardAimg.classList.add('opacity1');
    cardAline.classList.remove('rotateRight');
    cardAline.classList.add('rotateLeft');
});




let cardB = document.getElementById('card02');
let cardBline = document.getElementById('cardLine02');
let cardBtext = document.getElementById('cardText02');
let cardBimg = document.getElementById('cardImg02');

cardB.addEventListener('mouseover', () => {
    cardBtext.classList.add('opacity1');
    cardBtext.classList.remove('none');
    cardBimg.classList.add('opacity0');
    cardBimg.classList.remove('opacity1');
    cardBline.classList.add('rotateRight');
    cardBline.classList.remove('rotateLeft');
});

cardB.addEventListener('mouseout', () => {
    cardBtext.classList.remove('opacity1');
    cardBtext.classList.add('opacity0');
    cardBtext.classList.remove('scale0');
    cardBimg.classList.remove('opacity0');
    cardBimg.classList.add('opacity1');
    cardBline.classList.remove('rotateRight');
    cardBline.classList.add('rotateLeft');
});



let cardC = document.getElementById('card03');
let cardCline = document.getElementById('cardLine03');
let cardCtext = document.getElementById('cardText03');
let cardCimg = document.getElementById('cardImg03');

cardC.addEventListener('mouseover', () => {
    cardCtext.classList.add('opacity1');
    cardCtext.classList.remove('none');
    cardCimg.classList.add('opacity0');
    cardCimg.classList.remove('opacity1');
    cardCline.classList.add('rotateRight');
    cardCline.classList.remove('rotateLeft');
});

cardC.addEventListener('mouseout', () => {
    cardCtext.classList.remove('opacity1');
    cardCtext.classList.add('opacity0');
    cardCtext.classList.remove('scale0');
    cardCimg.classList.remove('opacity0');
    cardCimg.classList.add('opacity1');
    cardCline.classList.remove('rotateRight');
    cardCline.classList.add('rotateLeft');
});




let cardD = document.getElementById('card04');
let cardDline = document.getElementById('cardLine04');
let cardDtext = document.getElementById('cardText04');
let cardDimg = document.getElementById('cardImg04');

cardD.addEventListener('mouseover', () => {
    cardDtext.classList.add('opacity1');
    cardDtext.classList.remove('none');
    cardDimg.classList.add('opacity0');
    cardDimg.classList.remove('opacity1');
    cardDline.classList.add('rotateRight');
    cardDline.classList.remove('rotateLeft');
});

cardD.addEventListener('mouseout', () => {
    cardDtext.classList.remove('opacity1');
    cardDtext.classList.add('opacity0');
    cardDtext.classList.remove('scale0');
    cardDimg.classList.remove('opacity0');
    cardDimg.classList.add('opacity1');
    cardDline.classList.remove('rotateRight');
    cardDline.classList.add('rotateLeft');
});




let cardE = document.getElementById('card05');
let cardEline = document.getElementById('cardLine05');
let cardEtext = document.getElementById('cardText05');
let cardEimg = document.getElementById('cardImg05');

cardE.addEventListener('mouseover', () => {
    cardEtext.classList.add('opacity1');
    cardEtext.classList.remove('none');
    cardEimg.classList.add('opacity0');
    cardEimg.classList.remove('opacity1');
    cardEline.classList.add('rotateRight');
    cardEline.classList.remove('rotateLeft');
});

cardE.addEventListener('mouseout', () => {
    cardEtext.classList.remove('opacity1');
    cardEtext.classList.add('opacity0');
    cardEtext.classList.remove('scale0');
    cardEimg.classList.remove('opacity0');
    cardEimg.classList.add('opacity1');
    cardEline.classList.remove('rotateRight');
    cardEline.classList.add('rotateLeft');
});




let cardF = document.getElementById('card06');
let cardFline = document.getElementById('cardLine06');
let cardFtext = document.getElementById('cardText06');
let cardFimg = document.getElementById('cardImg06');

cardF.addEventListener('mouseover', () => {
    cardFtext.classList.add('opacity1');
    cardFtext.classList.remove('none');
    cardFimg.classList.add('opacity0');
    cardFimg.classList.remove('opacity1');
    cardFline.classList.add('rotateRight');
    cardFline.classList.remove('rotateLeft');
});

cardF.addEventListener('mouseout', () => {
    cardFtext.classList.remove('opacity1');
    cardFtext.classList.add('opacity0');
    cardFtext.classList.remove('scale0');
    cardFimg.classList.remove('opacity0');
    cardFimg.classList.add('opacity1');
    cardFline.classList.remove('rotateRight');
    cardFline.classList.add('rotateLeft');
});





let cardG = document.getElementById('card07');
let cardGline = document.getElementById('cardLine07');
let cardGtext = document.getElementById('cardText07');
let cardGimg = document.getElementById('cardImg07');

cardG.addEventListener('mouseover', () => {
    cardGtext.classList.add('opacity1');
    cardGtext.classList.remove('none');
    cardGimg.classList.add('opacity0');
    cardGimg.classList.remove('opacity1');
    cardGline.classList.add('rotateRight');
    cardGline.classList.remove('rotateLeft');
});

cardG.addEventListener('mouseout', () => {
    cardGtext.classList.remove('opacity1');
    cardGtext.classList.add('opacity0');
    cardGtext.classList.remove('scale0');
    cardGimg.classList.remove('opacity0');
    cardGimg.classList.add('opacity1');
    cardGline.classList.remove('rotateRight');
    cardGline.classList.add('rotateLeft');
});




let countBox = document.querySelector('#count01'),
    count = 0;

let counting = setInterval(function () {
    if (count == 8620) {
        clearInterval(counting);
        return false;
    }
    count += 20;
    countBox.innerHTML = new Intl.NumberFormat().format(count);
}, 12);


let countBoxB = document.querySelector('#count02'),
    countB = 0;

let countingB = setInterval(function () {
    if (countB == 6216) {
        clearInterval(countingB);
        return false;
    }
    countB += 56;
    countBoxB.innerHTML = new Intl.NumberFormat().format(countB);
}, 40);


let countBoxC = document.querySelector('#count03'),
    countC = 0;

let countingC = setInterval(function () {
    if (countC == 6193) {
        clearInterval(countingC);
        return false;
    }
    countC += 11;
    countBoxC.innerHTML = new Intl.NumberFormat().format(countC);
}, 5);


let countBoxD = document.querySelector('#count04'),
    countD = 0;

let countingD = setInterval(function () {
    if (countD == 4806) {
        clearInterval(countingD);
        return false;
    }
    countD += 18;
    countBoxD.innerHTML = new Intl.NumberFormat().format(countD);
}, 12);
        