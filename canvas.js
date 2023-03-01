var canvas = document.querySelector('canvas');

var context = canvas.getContext('2d');

// Set the backdrop color
context.fillStyle = "#ECFFDC";
context.fillRect(0, 0, canvas.width, canvas.height);

// Add Images to Canvas
var img1 = new Image();
img1.src = "./images/shapes/44.png";
img1.onload = function() {
    context.drawImage(img1, canvas.width - 100, canvas.height - 225);
};

var img2 = new Image();
img2.src = "./images/sprites/12.png";
img2.onload = function() {
    context.drawImage(img2, canvas.width - 125, canvas.height - 100);
};

var img3 = new Image();
img3.src = "./images/shapes/54.png";
img3.onload = function() {
    context.drawImage(img3, canvas.width - 250, canvas.height - 170);
};


var img6 = new Image();
img6.src = "./images/shapes/38.png";
img6.onload = function() {
    context.drawImage(img6, canvas.width - 250, 150);
};


// Add objectives box 
context.fillStyle = "#ffebcd";
context.fillRect(10, canvas.height - 160, 295, 140);
context.strokeRect(10, canvas.height - 160, 295, 140);
context.fillStyle = "#000";
context.fillText("OBJECTIVES", 130, canvas.height - 145);
context.fillText("BUDGET LIMIT        2200", 15, canvas.height - 120);
context.fillText("OIL LIMIT                 42", 15, canvas.height - 95);
context.fillText("GHG LIMIT              6300", 15, canvas.height - 70);
context.fillText("FUEL MIN                      25", 175, canvas.height - 120);
context.fillText("ELECTRICITY MIN        45", 175, canvas.height - 95);
context.fillText("HEAT MIN                      42", 175, canvas.height - 70);
context.fillText("ENERGY MIN                42", 175, canvas.height - 45);

// Add plans box
context.fillStyle = "#ffebcd";
context.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 160, 105, 100);
context.strokeRect(canvas.width / 2 - 100, canvas.height / 2 - 160, 105, 100);


// Plan Vehicle Fuel
context.fillStyle = "#ffebcd";
context.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 140, 105, 565);
context.strokeRect(canvas.width / 2 - 100, canvas.height / 2 - 140, 105, 565);

// Game Title
context.fillStyle = "#000000";
context.font = "bold 28px Arial";
context.fillText("      THE ENERGY GAME", 250, 30);

// ELEC Rect
context.fillStyle = "#ECFFDC";
context.fillRect(canvas.width / 1.9, canvas.height / 1.5, 30, 200);
context.strokeRect(canvas.width / 1.9, canvas.height / 1.5, 30, 200)

//HEAT Rect         Moves L/R, U/D, Width, Height
context.fillRect(canvas.width / 1.7, canvas.height / 1.5, 30, 200);
context.strokeRect(canvas.width / 1.7, canvas.height / 1.5, 30, 200)

//ENERGY Rect
context.fillRect(canvas.width / 1.55, canvas.height / 1.5, 30, 200);
context.strokeRect(canvas.width / 1.55, canvas.height / 1.5, 30, 200)

//FUEL Rect
context.fillRect(canvas.width / 1.7, canvas.height / 4, 30, 150);
context.strokeRect(canvas.width / 1.7, canvas.height / 4, 30, 150)

console.log(canvas);
