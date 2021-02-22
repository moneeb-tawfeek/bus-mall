'use strict'
let left = document.getElementById('left-image')
let middle = document.getElementById('middle-image')
let right = document.getElementById('right-image')


let leftImgI;
let middleImgI;
let rightImgI;
let userAttemptsCounter = 0;
let maxAttempt = 3;

function MallImg(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    MallImg.allImg.push(this);
}
// console.log(this);

MallImg.allImg = [];

new MallImg('bag', 'img/bag.jpg');
new MallImg('banana', 'img/banana.jpg');
new MallImg('bathroom', 'img/bathroom.jpg');
new MallImg('boots', 'img/boots.jpg');
new MallImg('breakfast', 'img/breakfast.jpg');
new MallImg('bubblegum', 'img/bubblegum.jpg');
new MallImg('chair', 'img/chair.jpg');
new MallImg('cthulhu', 'img/cthulhu.jpg');
new MallImg('dog-duck', 'img/dog-duck.jpg');
new MallImg('dragon', 'img/dragon.jpg');
new MallImg('pen', 'img/pen.jpg');
new MallImg('pet-sweep', 'img/pet-sweep.jpg');
new MallImg('scissors', 'img/scissors.jpg');
new MallImg('shark', 'img/shark.jpg');
new MallImg('sweep', 'img/sweep.png');
new MallImg('tauntaun', 'img/tauntaun.jpg');
new MallImg('unicorn', 'img/unicorn.jpg');
new MallImg('usb', 'img/usb.gif');
new MallImg('water-can', 'img/water-can.jpg');
new MallImg('wine-glass', 'img/wine-glass.jpg');

// console.log(MallImg.allImg);

function makeRandomI() {
    return Math.floor(Math.random() * MallImg.allImg.length)
}
// console.log(Math.floor(Math.random() * MallImg.allImg.length));

function renderThreeImg() {
    leftImgI = makeRandomI();
    middleImgI = makeRandomI();
    rightImgI = makeRandomI();


    while (
        leftImgI === middleImgI ||
        leftImgI === rightImgI ||
        middleImgI === leftImgI ||
        middleImgI === rightImgI ||

        rightImgI === middleImgI ||

        rightImgI === leftImgI

    ) {
        middleImgI = makeRandomI();
        rightImgI = makeRandomI();
        leftImgI = makeRandomI();
    }

}

leftImgI = makeRandomI();
middleImgI = makeRandomI();
rightImgI = makeRandomI();

console.log(leftImgI);
console.log(middleImgI);
console.log(rightImgI);


left.src = MallImg.allImg[leftImgI].source;
middle.src = MallImg.allImg[middleImgI].source;
right.src = MallImg.allImg[rightImgI].source;

makeRandomI();
renderThreeImg();



left.addEventListener('click', handleUserClick);
middle.addEventListener('click', handleUserClick);
right.addEventListener('click', handleUserClick);
function handleUserClick(event) {
    userAttemptsCounter++;

    if (userAttemptsCounter < maxAttempt) {
        // make sure to add to votes for the correct element and render again
        if (event.target.id === 'left-image') {
            MallImg.allImg[leftImgI].votes++


        }
        else if (event.target.id === 'middle-image') {
            MallImg.allImg[middleImgI].votes++
        }

        else {
            MallImg.allImg[rightImgI].votes++
        }


    } else {
        let list = document.getElementById('results-list')
        let mallResult,
        for (leti = 0; i < MallImg.allImg.length; i++) {
            mallResult = document.createElement('li')
            list.appendChild(mallResult)
            mallResult.textContent = MallImg.allImg[i] + 'has' + MallImg.allImg[i].votes + 'votes'
        }
        left.removeEventListener('click', handleUserClick);
        middle.removeEventListener('click', handleUserClick);
        right.removeEventListener('click', handleUserClick);
    }



}

