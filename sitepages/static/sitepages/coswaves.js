var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


c.strokeStyle = 'white';
c.fillStyle = 'white';

//The top graph x,y are positions
for (var i =0, x = 0, y = 140, pie = 0; i < 100; i++) {
var text = "Tech";


    x += 48 ;
    y += Math.cos(pie) *  80 ;
    pie += Math.PI/5 ;   // The denominator changes the amplitude of the graph (The higher the denominator the higher the amplitude)
                        
   
   

c.font = '15px Verdana';
c.fillText(text, x, y); 

}

//The bottom graph
for (var i =0, x = 0, y = 500, pie = 0; i < 100; i++) {
    var text = "Blog";
    
    
        x += 48 ;
        y += Math.cos(pie) *  80 ;
        pie += Math.PI/5 ;
       
       
    
    c.font = '15px Verdana';
    c.fillText(text, x, y); 
    
    }

    