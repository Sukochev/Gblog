var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


//Acr / Circle + For Loop Radius and Color Play
for (var i =0, radius= 211; i < 251; i++, radius += 3) {
    var color = '#' + (0x1000000 + Math.floor(Math.random() * 0x1000000)).toString(16).substr(1);
    c.strokeStyle = color;
    c.beginPath();
    c.arc(innerWidth/2, innerHeight/2, radius, 0, Math.PI *2, false);
    c.stroke(); 
}