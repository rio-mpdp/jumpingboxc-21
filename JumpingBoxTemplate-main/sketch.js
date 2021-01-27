var canvas,a,b,c,d,e;

var music2;
var music3;
var music4;
//458be5afce9d044be80ddec18cbac38d.jpg

function preload(){
   bp=loadImage("lo.jpg")
    music2 = loadSound("blackpink2.mp3");
    music3 = loadSound("blackpink.mp3");
    music4 = loadSound("blackpink3.mp3");
}


function setup(){
    canvas = createCanvas(530,430);
    edges = createEdgeSprites()
 var bg=createSprite(530/2,430/2,530,430)
 bg.addImage(bp)
 bg.scale=0.4
    a= createSprite(200,400,110,15)
    a.shapeColor="blue"
    b= createSprite(320,400,110,15)
    b.shapeColor="yellow"
    c= createSprite(80,400,110,15)
    c.shapeColor="red"
    d= createSprite(440,400,110,15)
    d.shapeColor="#20CD4B"
    e= createSprite(Math.round(random(20,480)),100,20,20)
    e.velocityX=2
    e.velocityY=2
    e.shapeColor="white"
    context = new AudioContext();
   
}

function draw() {
    background("black");
    if(touches.length>0){
        context.resume();
    }
    
   
    if(e.isTouching(a)){ 
        e.shapeColor="blue"
        stopMusic()
       music4.play()
      
    }
    if( e.isTouching(b)){
        e.shapeColor="yellow"
        stopMusic()
        music2.play()          
    }
    
    if( e.isTouching(d)){
        e.shapeColor="#20CD4B"
             
        stopMusic()
        music3.play()
    }
    if( e.isTouching(c)){
        e.shapeColor="red"
        stop()
        stopMusic()
       
      

        }
    
    e.bounceOff(edges)
    e.bounceOff(d)
    e.bounceOff(c)
    e.bounceOff(b)
    e.bounceOff(a)
    
   drawSprites();
   
}
function stopMusic(){
   
    music2.stop()
    music3.stop()
    music4.stop()
} 
function stop(){
    e.velocityY=0
    e.velocityX=0
}

