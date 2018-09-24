var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

window.addEventListener('mousedown', init, false);
// Event for touchscreens/mobile phones
window.addEventListener('touchend', init, false);


function Triangle(x1, y1, x2, y2, x3, y3, dx, dy) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.dx = dx;
    this.dy = dy;


    this.draw = function() {
        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.lineTo(this.x3, this.y3);
        c.lineTo(this.x1, this.y1);
        c.strokeStyle = '#4169e1';
        c.fillStyle = '#4169e1';
        c.stroke();
        c.fill();
        
        
        
    }

    this.update = function() {
        if (this.x1 > innerWidth || this.x1 < 0) {
            this.dx = -this.dx;
        }
        if (this.x2 > innerWidth || this.x2 < 0) {
            this.dx = -this.dx;
        }
        if (this.x3 > innerWidth || this.x3 < 0) {
            this.dx = -this.dx;
        }
            
        if (this.y1 > innerHeight || this.y1 < 0) {
            this.dy = -this.dy;
        }
        if (this.y2 > innerHeight || this.y2 < 0) {
            this.dy = -this.dy;
        }
        if (this.y3 > innerHeight || this.y3 < 0) {
            this.dy = -this.dy;
        }
        
        this.x1 += this.dx;
        this.x2 += this.dx;
        this.x3 += this.dx;
        this.y1 += this.dy;
        this.y2 += this.dy;
        this.y3 += this.dy;

        this.draw();     
    }
    
}

var triangleArray = [];

function init() {

    triangleArray = [];

for (var i =0; i < 450; i++) {
    var x1 = Math.random() * 20;
    var y1 = Math.random() * 20;
    var x2 = Math.random() * 20;
    var y2 = Math.random() * 20;
    var x3 = Math.random() * 20;
    var y3 = Math.random() * 20;
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    triangleArray.push(new Triangle(x1, y1, x2, y2, x3, y3, dx, dy));

}
    
}




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i =0; i < triangleArray.length; i++) {
        triangleArray[i].update();
    }
    
      
}   
    
init();
animate();



//Hard coded random moving triangle.
// var x1 = Math.random() * innerWidth;
// var y1 = Math.random() * innerHeight;
// var x2 = Math.random() * innerWidth;
// var y2 = Math.random() * innerHeight;
// var x3 = Math.random() * innerWidth;
// var y3 = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     c.beginPath();
//     c.moveTo(x1, y1);
//     c.lineTo(x2, y2);
//     c.lineTo(x3, y3);
//     c.lineTo(x1, y1);
//     c.strokeStyle = "blue";
//     c.stroke();

//     if (x1 > innerWidth || x1 < 0) {
//         dx = -dx;
//     }
//     if (x2 > innerWidth || x2 < 0) {
//         dx = -dx;
//     }
//     if (x3 > innerWidth || x3 < 0) {
//         dx = -dx;
//     }

//     if (y1 > innerHeight || y1 < 0) {
//         dy = -dy;
//     }
//     if (y2 > innerHeight || y2 < 0) {
//         dy = -dy;
//     }
//     if (y3 > innerHeight || y3 < 0) {
//         dy = -dy;
//     }

//     x1 += dx;
//     x2 += dx;
//     x3 += dx;
//     y1 += dy;
//     y2 += dy;
//     y3 += dy;
// }

// animate();