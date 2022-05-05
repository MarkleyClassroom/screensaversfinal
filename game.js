var cntr = 0;
var id = setInterval(tennisBall, 50); //start the timer for the tennisball every 50 milliseconds
var id2 = setInterval(basketBall, 25); //start the timer for the basketball every 25 milliseconds

//tennis ball variables
var pos = 0; //tracks the left position
var toppos = 0; //tracks the top position
var x = 1; //determines left or right
var y = 1; //determines up or down

//get the images so we can move them
var elem2 = document.getElementById("animateBB");
var elem = document.getElementById("animateTB");

//basket ball variables
var pos2 = 0;
var toppos2 = 0;
var x2 = 1;
var y2 = 1

//move the tennis ball
function tennisBall() {


    // generate random number that will be the new top and left positioning
    pos += (Math.ceil(Math.random() * 5)) * x
    toppos += (Math.ceil(Math.random() * 10)) * y
    //add the random number to the current position which will move the ball
    elem.style.top = toppos + 'px';
    elem.style.left = pos + 'px';
    cntr++ //helps us track the first 100px movement so they don't collide at the starting position 

    //check to see if the ball has moved to a boundary (350X350 the width of the container)
    if (pos > 350) {
        //clearInterval(id);
        x = -1 // used in the random number calcuation to move the ball left
    } else if (pos < 0) {
        x = 1; // used in the random number calcuation to move the ball right
    }
    if (toppos > 350) {
        //clearInterval(id)
        y = -1 // used in the random number calcuation to move the ball up
    } else if (toppos < 0) {
        y = 1 // used in the random number calcuation to move the ball up
    }
    //check to see if the collided after they were moved
    collide();
}


//move the basketball
function basketBall() {


    // generate random number that will be the new top and left positioning
    pos2 += (Math.ceil(Math.random() * 5)) * x2
    toppos2 += (Math.ceil(Math.random() * 10)) * y2
    //add the random number to the current position which will move the ball
    elem2.style.top = toppos2 + 'px';
    elem2.style.left = pos2 + 'px';
    cntr++
    //check to see if the ball has moved to a boundary (350X350 the width of the container)
    if (pos2 > 350) {
        //clearInterval(id);
        x2 = -1 // used in the random number calcuation to move the ball left
    } else if (pos2 < 0) {
        x2 = 1; // used in the random number calcuation to move the ball right
    }
    if (toppos2 > 350) {
        //clearInterval(id)
        y2 = -1 // used in the random number calcuation to move the ball up
    } else if (toppos2 < 0) {
        y2 = 1 // used in the random number calcuation to move the ball up
    }
    collide();
}

//check to see if they collide by checking the top and left positioning values and see if they are close together
function collide() {
    //if the top position of each image AND the left postion of each image are within 50 pixels of each other, they must be close
    // togehter the cntr just makes sure that the timer went off at least 100 times so the images don't collide at the beginning of the program
    if ((Math.abs(toppos2 - toppos) < 50) && (Math.abs(pos - pos2) < 50) && cntr > 100)

    {
        elem.src = "kapow-logo.png";  //change the image to the ka-pow image
        elem.style.width = "200px";   //set the width of the kapow image
        elem.style.height = "200px";  //set the height of the kapow image
        elem2.style.display = "none"; //make the second image disappear
        stopIt();

    }
}

// create code so both timers are stopped - this happens when they collide, or when we click the button
function stopIt() {
    clearInterval(id);
    clearInterval(id2);
}

