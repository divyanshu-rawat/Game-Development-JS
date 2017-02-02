var Number_0f_faces = 5;
var score = 0;
var my_score = document.getElementById("my_score");

var theLeftSide=document.getElementById("leftside");

var right_side=document.getElementById("rightside"); 


var thebody=document.getElementById("thebody");

function generateFaces()
{
    console.log(Number_0f_faces);

    var count=Number_0f_faces;
    
    while(count > 0)
    {
        var new_element=document.createElement("img");
        
        new_element.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        
        theLeftSide.appendChild(new_element);
        
        x_position=Math.floor(Math.random()*400);
        
        y_position=Math.floor(Math.random()*400);
        
        new_element.style.left=x_position + "px";
        
        new_element.style.top=y_position + "px";
        
        count = count-1;
    }   
        
        var left_images = theLeftSide.cloneNode(true);
        
            left_images.removeChild(left_images.lastChild);
        
            right_side.appendChild(left_images);
        
            theLeftSide.lastChild.onclick =
        
                function nextLevel(event)
                
                  {
                    
                    event.stopPropagation();
                    
                    while (theLeftSide.hasChildNodes()) 
                    
                          {   
                    
                              theLeftSide.removeChild(theLeftSide.firstChild);
                    
                          }
                    
                    while (right_side.hasChildNodes()) 
                    
                          {   
                    
                              right_side.removeChild(right_side.firstChild);
                    
                          }
                            Number_0f_faces = Number_0f_faces + 5;

                            score = score + 5;
                            
                            my_score.innerHTML = "";

                            my_score.append("My Score - " + score);
                    
                            generateFaces();
                            
                  };
                 
         thebody.onclick = function gameOver() {
            
            alert("Game Over!");
            
            thebody.onclick = null; 
            
            theLeftSide.lastChild.onclick = null;
    
        };           
}

