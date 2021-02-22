


'use strict';


/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 25 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
                        name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
                        Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
                        keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
                    }
  })

  function to display all the clicks at the end () {
                        generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/


let leftImageElement = document.getElementById('left-image');


let rightImageElement = document.getElementById('right-image');
let maxAttempts = 10;
let userAttemptsCounter = 0;
let leftImageIndex;
let rightImageIndex;
// let goats=[];
function GoatImage(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    GoatImage.allImages.push(this);
}


// console.log(this);
GoatImage.allImages = [];


new GoatImage('cruisin-goat', 'images/cruisin-goat.jpg'); //0
new GoatImage('float-your-goat', 'images/float-your-goat.jpg');//1
new GoatImage('goat-away', 'images/goat-away.jpg');//2
new GoatImage('goat-out-of-hand', 'images/goat-out-of-hand.jpg');//3
new GoatImage('kissing-goat', 'images/kissing-goat.jpg');//4
new GoatImage('sweater-goat', 'images/sweater-goat.jpg');//5
new GoatImage('sassy-goat', 'images/sassy-goat.jpg');//6


console.log(GoatImage.allImages);


function generateRandomIndex() {
    return Math.floor(Math.random() * GoatImage.allImages.length);
}


// console.log( Math.floor( Math.random() * GoatImage.allImages.length));


function renderTwoImages() {

    leftImageIndex = generateRandomIndex();
    // rightImageIndex = generateRandomIndex()


    // // we need to check if they are equal:
    // while (leftImageIndex === rightImageIndex) {

    //   rightImageIndex=generateRandomIndex();
    // }


    do {
        rightImageIndex = generateRandomIndex();
    } while (leftImageIndex === rightImageIndex)




    GoatImage.allImages
    console.log(GoatImage.allImages[leftImageIndex]);


    leftImageElement.src = GoatImage.allImages[leftImageIndex].source;

    rightImageElement.src = GoatImage.allImages[rightImageIndex].source;

}


renderTwoImages();






// Handle clicking
leftImageElement.addEventListener('click', handleUserClick);
rightImageElement.addEventListener('click', handleUserClick);


function handleUserClick(event) {
    // give the user 10 tries to click after that show result
    userAttemptsCounter++;


    console.log(event.target.id);


    if (userAttemptsCounter < maxAttempts) {
        // make sure to add to votes for the correct element and render again
        if (event.target.id === 'left-image') {
            GoatImage.allImages[leftImageIndex].votes++


        } else {
            GoatImage.allImages[rightImageIndex].votes++
        }
        renderTwoImages();


    }
    else {
        // render the list of results
        let list = document.getElementById('results-list');
        let goatResult;
        for (let i = 0; i < GoatImage.allImages.length; {
            goatResult = document.createElement('li');
            list.appendChild(goatResult);
            goatResult.textContent = GoatImage.allImages[i].name + ' has ' + GoatImage.allImages[i].votes + ' votes';
        }
	    rightImageElement.removeEventListener('click', handleUserClick);
        leftImageElement.removeEventListener('click', handleUserClick);




    }
}




