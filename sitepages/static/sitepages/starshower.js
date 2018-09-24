// Utility functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}
// Utility functions end


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight



const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners


addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Star(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = {
        x: (Math.random() - 0.5) * 10,
        y: 3
    }
    this.friction = 0.5
    this.gravity = 2
}

Star.prototype.draw = function() {
    c.save();
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.shadowColor = '#E3EAEF'
    c.shadowBlur = 20;
    c.fill()
    c.closePath()
    c.restore();
}

Star.prototype.update = function() {
    this.draw()
//When ball hits bottom of screen
    if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
        this.velocity.y = -this.velocity.y * this.friction
        this.shatter()
    } else {
        this.velocity.y += this.gravity
    }

    //When ball hits side of screen
    if (this.x + this.radius + this.velocity.x > canvas.width || 
        this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x * this.friction;
        this.shatter();
    }

    this.x += this.velocity.x
    this.y += this.velocity.y
}

Star.prototype.shatter = function() {
    this.radius -= 3
    for (let i = 0; i < 9; i++) {
        miniStars.push(new MiniStar(this.x, this.y, 1.4,))
    }
    for (let i = 0; i < 1; i++) {
        miniStars.push(new MiniStarI(this.x, this.y, 1.4,))
    }
}

function MiniStar(x, y, radius, color) {
    Star.call(this, x, y, radius, color)
    this.velocity = {
        x: randomIntFromRange(-5, 5),
        y: randomIntFromRange(-15, 15)
    }
    this.friction = 0.8
    this.gravity = 0.5
    this.ttl = 200
    this.opacity = 1.5
}

//This is MiniStar2 just to implement another colour upon landing
function MiniStarI(x, y, radius, color) {
    Star.call(this, x, y, radius, color)
    this.velocity = {
        x: randomIntFromRange(-5, 5),
        y: randomIntFromRange(-15, 15)
    }
    this.friction = 0.8
    this.gravity = 0.5
    this.ttl = 200
    this.opacity = 1.5
}

// MiniStar1 for the blue color - MiniStar2 is to implement another colour in the shatter funtion
MiniStar.prototype.draw = function() {
    c.save()
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    var r = randomIntFromRange(0, 255);
    var g = randomIntFromRange(0, 255);
    var b = randomIntFromRange(0, 255);
   // c.fillStyle = "rgba(" + r + "," + g + "," + b + ")";
// This colour is White like the big star
   // c.fillStyle = "rgba(227, 234, 239," + this.opacity + ")";  
   // This colour is Orange - Like a spark
   // c.fillStyle = "rgba(255, 92, 0," + this.opacity + ")";
   // This colour is Azure
    c.fillStyle = "rgba(0, 128, 255," + this.opacity + ")";
  //  c.shadowColor = '#E3EAEF'
  //  c.shadowBlur = 10;
    c.fill()
    c.closePath()
    c.restore();
}

//This is MiniStar2 just to implement another colour upon landing
MiniStarI.prototype.draw = function() {
    c.save()
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    var r = randomIntFromRange(0, 255);
    var g = randomIntFromRange(0, 255);
    var b = randomIntFromRange(0, 255);
   // c.fillStyle = "rgba(" + r + "," + g + "," + b + ")";
// This colour is White like the big star
   // c.fillStyle = "rgba(227, 234, 239," + this.opacity + ")";  
   // This colour is Orange - Like a spark
    c.fillStyle = "rgba(255, 94, 0," + this.opacity + ")";
   // This colour is Azure
   // c.fillStyle = "rgba(0, 128, 255," + this.opacity + ")";
   // c.shadowColor = '#E3EAEF'
   // c.shadowBlur = 10;
    c.fill()
    c.closePath()
    c.restore();
}

MiniStar.prototype.update = function() {
    this.draw()
//When ball hits bottom of screen
    if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
        this.velocity.y = -this.velocity.y * this.friction
    } else {
        this.velocity.y += this.gravity
    }

    this.y += this.velocity.y
    this.x += this.velocity.x 
    this.ttl -= 1
    this.opacity -= 1 / this.ttl
    
}

//This is MiniStar2 just to implement another colour upon landing
MiniStarI.prototype.update = function() {
    this.draw()
//When ball hits bottom of screen
    if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
        this.velocity.y = -this.velocity.y * this.friction
    } else {
        this.velocity.y += this.gravity
    }

    this.y += this.velocity.y
    this.x += this.velocity.x 
    this.ttl -= 1
    this.opacity -= 1 / this.ttl
    
}



function createMountainRange(mountainAmount, height, color) {
    for (let i = 0; i < mountainAmount; i++) {
        const mountainWidth = canvas.width / mountainAmount
        c.beginPath()
        c.moveTo(i * mountainWidth, canvas.height)
        c.lineTo(i * mountainWidth + mountainWidth, canvas.height)
        c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height)
        c.lineTo(i * mountainWidth, canvas.height)
        c.fillStyle = color;
        c.fill();
        c.closePath();
    }

}

// Implementation
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
backgroundGradient.addColorStop(0, '#171e26')
backgroundGradient.addColorStop(1, '#3f586b')
let stars
let miniStars
let backgroundStars
let ticker = 0
let randomSpawnRate = 75;
let groundHeight = 50;

function init() {
    stars = []
    miniStars = []
    backgroundStars = []

    // for (let i = 0; i < 1; i++) {
    //     stars.push(new Star(canvas.width/2, 30, 30, '#E3EAEF'));
    //}

    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * (canvas.height / 3)
        const radius = Math.random() * 2
        backgroundStars.push(new Star(x, y, radius, 'white'))
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height)


    backgroundStars.forEach(backgroundStar => {
        backgroundStar.draw()
    })

    createMountainRange(1, canvas.height - 100, '#384551');
    createMountainRange(2, canvas.height - 200,  "#2B3843");
	createMountainRange(3, canvas.height - 300 , "#26333E");
    createMountainRange(18, canvas.height - 540, '#002800');
    c.fillStyle = "#182028";
    c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
    
    
    stars.forEach((star, index) => {
        star.update();
        if (star.radius == 0) {
            stars.splice(index, 1)
        }
    });

    miniStars.forEach((miniStar, index) => {
        miniStar.update();
        if (miniStar.ttl == 0) {
            miniStars.splice(index, 1)
        }
    });

    ticker++
    console.log(ticker)

    if (ticker % randomSpawnRate == 0) {
        const radius = 9;
        const x = Math.max(radius, Math.random() * canvas.width - radius);
        stars.push(new Star(x, -150, radius, '#E3EAEF'))
        randomSpawnRate = randomIntFromRange(60, 180)
    }
    
    
}

init()
animate()