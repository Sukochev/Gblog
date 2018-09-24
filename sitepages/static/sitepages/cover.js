var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



//Rectangles
// c.fillStyle = 'black';
// c.fillRect(600, 100, 100, 100);
// c.fillStyle = "black";
// c.fillRect(850, 100, 100, 100);
// console.log(canvas);


//Line
// c.beginPath();
// c.moveTo(600, 400);
// c.lineTo(600, 500);
// c.lineTo(950, 500);
// c.lineTo(950, 400);
// c.strokeStyle = "#483844";
// c.stroke();


//Hard coded random moving circle.
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 20;
// var dy = (Math.random() - 0.5) * 20;
// var radius = 30
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

// c.beginPath();
// c.arc(x, y, radius, 0, Math.PI *2, false);
// c.strokeStyle = 'blue'
// c.stroke();

// animate();

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 50;
//var minRadius = 10;

var colorArray = [
    '#003056',
    '#04518C',
    '#00A1D9',
    '#47D9BF',
    '#F2D03B',
];

window.addEventListener('click', changeBack, false);
window.addEventListener('dblclick', changeBackAgain, true);

function changeBack() {
    if (document.getElementById('canvas').style.background='white'){
        return document.getElementById('canvas').style.background='black';
    }
}

function changeBackAgain() {

    if (document.getElementById('canvas').style.background='black'){
        return document.getElementById('canvas').style.background='white';
    }
}

   

//The first two events are for touchscreen phones, the main event is the mousemove event below.
window.addEventListener('touchmove', grow);
window.addEventListener('touchstart', grow);
window.addEventListener('mousemove', grow);

function grow(event) {
    mouse.x = event.x;
    mouse.y = event.y;
}

window.addEventListener('resize', 
    function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
    
        if (this.y + radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
    
        this.x += this.dx;
        this.y += this.dy;

        //Interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y -this.y > -50
            ) {
            if (this.radius < maxRadius) {
            this.radius += 1;
        }
    }   else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];



function init() {

    circleArray = [];

    for (var i = 0; i < 800; i++) {
        var radius = Math.random() * 14 + 1;
        var x = Math.random() * (innerWidth - radius*2) + radius;
        var y = Math.random() * (innerHeight - radius*2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        
        circleArray.push(new Circle(x, y, dx, dy, radius));
        
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);


    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
 
    
}   

init();
animate();


// c.font = '75px Verdana, sans serif';
//     c.fillStyle = 'black';
//     c.textAlign = 'center';
//     c.fillText("Greg's Tech Blog", innerWidth/2, innerHeight/2);
//     c.strokeText("Greg's Tech Blog", innerWidth/2 +3, innerHeight/2 +3);



