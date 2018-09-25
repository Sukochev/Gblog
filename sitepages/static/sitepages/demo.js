// This function is purely for the autoscroll button


function autoScrollTo() {
let scrolPoint = window.pageYOffset;
let setInt = setInterval( function () {
    if (scrolPoint <= 0) {
        clearInterval(setInt);
    }
    else {
        window.scroll(0, scrolPoint -= 10);
    }
})
}
//End of autoscroll function

//This function is for random location generation
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
//End of random Int function

//Next is the animation canvas set up

var myWidth = innerWidth ;
var myHeight = window.innerHeight/2;

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = myWidth;
canvas.height = myHeight;



// Event Listeners

// This listener is for parallax scrolling
window.addEventListener('scroll', function() {
    
    let scrollToop = window.pageYOffset;

    //console.log(scrollToop);

    let m = this.document.getElementById("backpic1"), b = m.style;
    
    b.backgroundPositionY = -(scrollToop*1.5) + "px"

    let n = this.document.getElementById("backpic2"), bb = n.style;

    bb.backgroundPositionY = -(scrollToop*1.0) + "px"
   
});



//This is for maintaining animation upon screen resizing
addEventListener('resize', () => {
    canvas.width = myWidth;
    canvas.height = myHeight;
    
    init()
})

// Objects
//This Object is the basis for the initial firework as well as the sparks
function Circle(x, y, radius, firework) {
    this.x = x;
    this.y = y;
    this.radius = radius
    this.firework = firework;
    if (this.firework) {
    this.velocity = {
        x: 0,
        y: randomIntFromInterval(-17, -11)
    }
} else {this.velocity = {
    x: randomIntFromInterval(-2, 2) * (Math.random() * 1.5),
    y: randomIntFromInterval(-5, 4) * (Math.random())
}}
    this.gravity = 0.45;
    this.lifespan = 300;
    this.opacity = 1; // The flash you see as the firework dissapears is a result of the opacity.
    //this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    
    this.done = function() {
        if (this.lifespan < 0) {
            return true;
        } else {return false}
    }

    this.draw = function() {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.fillStyle = "rgba(255, 237, 5," + this.opacity + ")";
        c.fill();
        c.restore();

    }

    this.update = function() {

        if (!this.firework) {
            //this.velocity.y += this.gravity * 0.85;
            this.x += this.velocity.x * 0.3;
            this.y += this.velocity.y * 0.3;
        } else {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        }

        this.lifespan -= 5;
        this.opacity -= 1 / this.lifespan
        this.draw();
    }
}

//This object manages the sparks after explosion.
function Firework() {

    this.firework = new Circle(myWidth * Math.random(), canvas.height + 10, 2.4, true);
    this.exploded = false;
    this.particles = []  //The explode function pushes Circles into the particles array. Their behaviour is managed by draw and update fns.
    
    //This sets up the splicing of objects from the array later
    this.done = function() {
        if (this.exploded && this.particles.length === 0) {
            return true;
        } else {return false;}
    }

    this.draw = function() {
        if (!this.exploded) {
        this.firework.draw();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].draw()
        }
    }

    this.update = function() {
        if (!this.exploded) {
            this.firework.update();
            if (this.firework.velocity.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for (var i = this.particles.length -1; i >= 0 ; i--) {
            this.particles[i].update()
            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            } 
        }
        
        
    }

    this.explode = function() {
        
        for (var i = 0; i < 25; i++) {
            var p = new Circle(this.firework.x, this.firework.y, 0.9, false);
            this.particles.push(p);
               
        }

    }
    
}

// Implementation
var colorArray = [
    '#003056',
    '#04518C',
    '#00A1D9',
    '#47D9BF',
    '#F2D03B',
]; //Currently not utilised.

let fireworks

function init() {
    fireworks = []
    

  
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, myWidth, myHeight)

    c.font = "50px Impact";
    c.fillStyle = "white";
    c.textAlign = "center";
    c.fillText("Paint your", canvas.width/2, canvas.height/2 - 60, 260);
    c.fillText("Vision on a", canvas.width/2, canvas.height/2, 260);  
    c.fillText("Blank Canvas", canvas.width/2, canvas.height/2 + 60, 260); 
    

    if (Math.random() < 0.09) {
    fireworks.push(new Firework())
    }


    for (var i = fireworks.length - 1; i >= 0 ; i--) {
        fireworks[i].update();
        fireworks[i].draw(); 
        if (fireworks[i].done()) {
            fireworks.splice(i, 1)
        }       
}

    

   

    
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()