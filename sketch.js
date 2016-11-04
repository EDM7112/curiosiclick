var nomDeLaVariable = 0;

var choses = [ ];

var chose0;
var chose1;
var chose2;
var chose3;
var chose4;
var chose5;
var chose6;
var chose7;
var chose8;
var chose9;
var chose10;
var chose11;
var chose12;
var chose13;
var chose14;
var chose15;

    /*push()
    translate(largeur)
    
    */
  function refresh(){ 
    
    
  chose0 = new UneChose();
  chose1 = new UneChose();
  chose2 = new UneChose();
  chose3 = new UneChose();
  chose4 = new UneChose();
  chose5 = new UneChose();
  chose6 = new UneChose();
  chose7 = new UneChose();
  chose8 = new UneChose();
  chose9 = new UneChose();
  chose10 = new UneChose();
  chose11 = new UneChose();
  chose12 = new UneChose();
  chose13 = new UneChose();
  chose14 = new UneChose();
  chose15 = new UneChose();
  
  //probabilité d'apparition de la bitch parmi les 16 formes
  var aleatoire = random(0,16);
  if ( aleatoire < 1 ) {
     chose0.color = color(343, 69, 66);
     chose0.itsMeBitch = true;
     
  } else if ( aleatoire < 2 )  {
     chose1.color = color(343, 69, 66);
     chose1.itsMeBitch = true;
     
  } else if ( aleatoire < 3 )  {
     chose2.color = color(343, 69, 66);
     chose2.itsMeBitch = true;
     
  } else if ( aleatoire < 4 )  {
     chose3.color = color(343, 69, 66);
     chose3.itsMeBitch = true;
    
  } else if ( aleatoire < 5 )  {
     chose4.color = color(343, 69, 66);
     chose4.itsMeBitch = true;
     
  } else if ( aleatoire < 6 )  {
     chose5.color = color(343, 69, 66);
     chose5.itsMeBitch = true;
     
  } else if ( aleatoire < 7 )  {
     chose6.color = color(343, 69, 66);
     chose6.itsMeBitch = true;

  } else if ( aleatoire < 8 )  {
     chose7.color = color(343, 69, 66);
     chose7.itsMeBitch = true;
     
  } else if ( aleatoire < 9 )  {
     chose8.color = color(343, 69, 66);
     chose8.itsMeBitch = true;
     
  } else if ( aleatoire < 10 )  {
     chose9.color = color(343, 69, 66);
     chose9.itsMeBitch = true;
     
  } else if ( aleatoire < 11 )  {
     chose10.color = color(343, 69, 66);
     chose10.itsMeBitch = true;
     
  } else if ( aleatoire < 12 )  {
     chose11.color = color(343, 69, 66);
     chose11.itsMeBitch = true;
     
  } else if ( aleatoire < 13 )  {
     chose12.color = color(343, 69, 66);
     chose12.itsMeBitch = true;
     
  } else if ( aleatoire < 14 )  {
     chose13.color = color(343, 69, 66);
     chose13.itsMeBitch = true;
     
  } else if ( aleatoire < 15 )  {
     chose14.color = color(343, 69, 66);
     chose14.itsMeBitch = true;
     
  } else if ( aleatoire < 16 )  {
     chose15.color = color(343, 69, 66);
     chose15.itsMeBitch = true;
     
 }
}


function preload() {
  mySound = loadSound('assets/marge.mp3');
}
    
    
function setup() {
  
    noCursor ();
    
        createCanvas(windowWidth,windowHeight);
        colorMode(RGB);
        //background(0, 0, 100);
    
  mySound.setVolume(0.9);
  mySound.play();
  
        refresh();
        

}


function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        ////background(0, 0, 100);
}

function autoScale(targetWidth, targetHeight) {
        var aw = windowWidth/targetWidth;
        var ah = windowHeight/targetHeight;
        translate(windowWidth*0.5,windowHeight*0.5);

        scale( min(aw,ah) );
        translate(-targetWidth*0.5,-targetHeight*0.5);
}

function draw() {

autoScale(401,401);
    //création du tableau
        background(255, 255, 255);
        chose0.x = 50;
        chose0.y = 50;
        chose0.draw();

        chose1.x = 150;
        chose1.y = 50;
        chose1.draw();

        chose2.x = 250;
        chose2.y = 50;
        chose2.draw();

    push();
    translate(this.x-50,this.y-50)
        chose3.x = 350;
        chose3.y = 50;
        chose3.draw();
    pop();
    
        chose4.x = 50;
        chose4.y = 150;
        chose4.draw();
        
        chose5.x = 150;
        chose5.y = 150;
        chose5.draw();
        
        chose6.x = 250;
        chose6.y = 150;
        chose6.draw();
        
        chose7.x = 350;
        chose7.y = 150;
        chose7.draw();
        
        chose8.x = 50;
        chose8.y = 250;
        chose8.draw();
        
        chose9.x = 150;
        chose9.y = 250;
        chose9.draw();

        chose10.x = 250;
        chose10.y = 250;
        chose10.draw();

        chose11.x = 350;
        chose11.y = 250;
        chose11.draw();

        chose12.x = 50;
        chose12.y = 350;
        chose12.draw();
        
        chose13.x = 150;
        chose13.y = 350;
        chose13.draw();
        
        chose14.x = 250;
        chose14.y = 350;
        chose14.draw();
        
        chose15.x = 350;
        chose15.y = 350;
        chose15.draw();

text(nomDeLaVariable ,mouseX,mouseY);

  //nomDeLaVariable = nomDeLaVariable - 1;

}

function UneChose() {

        this.x = random(0, width);
        this.y = random(0, height);
        this.color = (0, 0, 0);
        this.size = (random(6, 30), random(10,50));
        this.itsMeBitch = false;

        if ( random(0,100) < 50 ) {
                this.quoiDessiner = "cercle";
        } else {
                this.quoiDessiner = "rectangle";
        }       
        

        this.draw = function() {
          
          noFill();
          rect(this.x-50,this.y-50,100,100);
          

                fill(this.color);

                if (this.quoiDessiner == "cercle") {
                        ellipse(this.x, this.y, this.size, this.size);
                } else if (this.quoiDessiner == "rectangle") {
                        rect(this.x, this.y, this.size, this.size);
                }
                
        }
}

function mouseClicked() {

        
var xBitch;
var yBitch;

         // découvrir qui est la Bitch et cliquer dessus
      if (chose0.itsMeBitch == true ) {
        xBitch= chose0.x;
        yBitch= chose0.y;
       } else if(chose1.itsMeBitch == true ) { 
        xBitch= chose1.x;
        yBitch= chose1.y;
       } else if(chose2.itsMeBitch == true ) { 
         xBitch= chose2.x;
         yBitch= chose2.y;
      }  else if(chose3.itsMeBitch == true ) { 
         xBitch= chose3.x;
         yBitch= chose3.y;
      }  else if(chose4.itsMeBitch == true ) { 
         xBitch= chose4.x;
         yBitch= chose4.y;
      }  else if(chose5.itsMeBitch == true ) { 
         xBitch= chose5.x;
         yBitch= chose5.y;
      }  else if(chose6.itsMeBitch == true ) { 
         xBitch= chose6.x;
         yBitch= chose6.y;
      }  else if(chose7.itsMeBitch == true ) { 
         xBitch= chose7.x;
         yBitch= chose7.y;
      }  else if(chose8.itsMeBitch == true ) { 
         xBitch= chose8.x;
         yBitch= chose8.y;
      }  else if(chose9.itsMeBitch == true ) { 
         xBitch= chose9.x;
         yBitch= chose9.y;
      }  else if(chose10.itsMeBitch == true ) { 
         xBitch= chose10.x;
         yBitch= chose10.y;
      }  else if(chose11.itsMeBitch == true ) { 
         xBitch= chose11.x;
         yBitch= chose11.y;
      }  else if(chose12.itsMeBitch == true ) { 
         xBitch= chose12.x;
         yBitch= chose12.y;
      }  else if(chose13.itsMeBitch == true ) { 
         xBitch= chose13.x;
         yBitch= chose13.y;
      }  else if(chose14.itsMeBitch == true ) { 
         xBitch= chose14.x;
         yBitch= chose14.y;
      }  else if(chose15.itsMeBitch == true ) { 
         xBitch= chose15.x;
         yBitch= chose15.y;
} 
  
  
  if (mouseX < xBitch + 50 && mouseX > xBitch -50) {
    if(mouseY < yBitch+50 && mouseY > yBitch -50)  {
      refresh();
   mySound.setVolume(0.5);
  mySound.play();
  
  nomDeLaVariable = nomDeLaVariable + 1;
  
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}