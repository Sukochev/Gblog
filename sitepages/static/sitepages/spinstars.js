function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');




addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

window.addEventListener('mousedown', init, false);
//window.addEventListener('mousedown', setTime);



// Objects

function Spark(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
    this.velocity = {
        x: randomIntFromRange(-30, 15),
        y: randomIntFromRange(-5, 25)
    }
    this.friction = 0.5
    this.gravity = 0.5
    this.ttl = 200
    this.opacity = 0.9
}

Spark.prototype.draw = function() {
    
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = "rgba(255, 255, 215," + this.opacity + ")";
    c.fill()
    c.closePath()
   
}

Spark.prototype.update = function() {
    
    //When ball hits bottom of screen
        if (this.y + this.radius + this.velocity.y > canvas.height) {
            this.velocity.y = -this.velocity.y * this.friction
        } 
        else if (this.x + this.radius + this.velocity.x > canvas.width) {
            this.velocity.x = -this.velocity.x * this.friction
        }
        
        else {
            this.velocity.y += this.gravity
        }
    
        this.y += this.velocity.y
        this.x += this.velocity.x 
        this.ttl -= 1
        this.opacity -= 1 / this.ttl
        
        this.draw()
    }



function Pentagon(numberOfSides, dradians, size, Xcenter, Ycenter, step, shift, color, dx, dy, dd) {
    this.numberOfSides = numberOfSides;
    this.dradians = dradians;
    this.size = size;
    this.Xcenter = Xcenter;
    this.Ycenter = Ycenter;
    this.step = step;
    this.shift = shift;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.dd = dd;
    this.historyx = [];
    this.historyy = [];
    
}

// Draw function determines how our object will look
Pentagon.prototype.draw = function() {
    c.save()
    c.beginPath();
    //c.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));   

    //The below section is for the motion trails
    for (i = 0, j = 0, rad = 10; i < this.historyx.length, j < this.historyy.length, rad < 70; i++, j++, rad += 1) {
        
        if (this.historyx[i] === this.historyx[i+2]) {
            break;
        }


        var pos1 = this.historyx[i];
        var pos2 = this.historyy[j];
        var ratio = (i + 1) / this.historyx.length;
        
        c.beginPath();
        c.arc(pos1, pos2, rad, 0, Math.PI *2, false);
        c.fillStyle = "rgba(250, 180, 100, " + ratio /1.5 + ")";;
        c.fill();

        
    } //End motion trails

    //This section is for the Pentagon/Big Star
    for (var i = 0; i <= this.numberOfSides; i++) {
        var curStep = i * this.step + this.shift;
        c.lineTo (this.Xcenter + this.size * Math.cos(curStep), this.Ycenter + this.size * Math.sin(curStep));
        c.lineTo (this.Xcenter + Math.cos(curStep) * 30, this.Ycenter + Math.sin(curStep) * 30);
        
    }

    for (var i = 0; i <= this.numberOfSides; i++) {
        var curStep = i * this.step + this.shift;
        c.lineTo (this.Xcenter + this.size * Math.cos(curStep), this.Ycenter + this.size * Math.sin(curStep));
        c.lineTo (this.Xcenter + (-Math.cos(curStep) * 30), this.Ycenter + (-Math.sin(curStep) * 30));
        
    }

    c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.lineWidth = 0.5;
    c.shadowColor = 'red' //'#E3EAEF'
    c.shadowBlur = 20;
    c.stroke();
    c.fill();
    c.restore()

   
}

//Update function handles movement rules
Pentagon.prototype.update = function() {
 
    if (this.Xcenter + this.size + (canvas.width / 51) > canvas.width) {
        this.dx = 0;
        this.dd = -5;
    
    }
   
    

    this.Xcenter += this.dx;
    this.shift += this.dd;

   
    this.historyx.push(this.Xcenter);
    this.historyy.push(this.Ycenter)
    

    if (this.historyx.length > 42) {
        this.historyx.splice(0, 1);
    }
    if (this.historyy.length > 42) {
        this.historyy.splice(0, 1);
    }

    
    this.draw()
   
    
    
}

// Motion Trails set up




      
//End of Motion Trail Set up


// Implementation - creating a number of objects in a particular way

//For the background color
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
backgroundGradient.addColorStop(0, '#0d0726')
backgroundGradient.addColorStop(0.5, '#37046e')
backgroundGradient.addColorStop(1, '#d7a6f0')


//For the spinning stars
let starArray
let sparks = []


function init() {
    starArray = []
    
   
    for (let i = 0, Ycenter = innerHeight / 3 - 50; i < 3; i++, Ycenter += size *2) {
        var numberOfSides = 5;
        var    dradians = -18;
        var    color = "#fab32f";
        var    size = canvas.height / 7;
        var    Xcenter = - 200;
        
        var    step  = 2 * Math.PI / numberOfSides;//Precalculate step value
        var    shift = (Math.PI / 180.0) * dradians;//Quick fix ;)
        var    dx = 17;
        var    dy = 0;
        var    dd = -70;
        
        starArray.push(new Pentagon(numberOfSides, dradians, size, Xcenter, Ycenter, step, shift, color, dx, dy, dd));
        
        // objects.push();
    } 
}

function init2() { 
    sparks = []
        
    for (k = 0, height = 50; k < 50, height < canvas.height/2; k++, height += 6) {
        
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        sparks.push(new Spark(canvas.width - 100, height, 1.5));
        
        
        }
        //console.log(sparks.length)
    }   

 function setTime() { setTimeout(init2, 1640) };


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height)

    sparks.forEach((spark) => {
        spark.update();
        if (spark.ttl == 0) {
            sparks.splice(0, 1)
        }
    });

//For our actual Star  
    for (var i =0; i < starArray.length; i++) {
        starArray[i].update();
          
}




    

    //pentagon();
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
//setTime()
animate()
 


//Code for a single pentagon - non OOP style

// function pentagon() {
// var numberOfSides = 5,
//         dradians = -18,
//         size = 55,
//         Xcenter = 750,
//         Ycenter = 250,
//         step  = 2 * Math.PI / numberOfSides,//Precalculate step value
//         shift = (Math.PI / 180.0) * dradians;//Quick fix ;)
        
        

//     c.beginPath();
//     //c.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          

//     for (var i = 0; i <= numberOfSides; i++) {
//         var curStep = i * step + shift;
//         c.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
//         c.lineTo (Xcenter + Math.cos(curStep) * 15, Ycenter + Math.sin(curStep) * 15);
        
//     }

//     for (var i = 0; i <= numberOfSides; i++) {
//         var curStep = i * step + shift;
//         c.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
//         c.lineTo (Xcenter + (-Math.cos(curStep) * 15), Ycenter + (-Math.sin(curStep) * 15));
        
//     }

//     c.strokeStyle = "#000000";
//     c.fillStyle = "#000000";
//     c.lineWidth = 0.5;
//     c.stroke();
//     c.fill();
// }
