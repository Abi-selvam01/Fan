// let wings=document.getElementById("wing");
function setSpeed(val)
{
    if(val==0)
     document.getElementById("wings").style.animation = "none";
    else if(val==1)
      document.getElementById("wings").style.animation = "rotatefan 1s linear infinite";
    else if(val==2)
      document.getElementById("wings").style.animation = "rotatefan 0.5s linear infinite";
     else if(val==3)
     document.getElementById("wings").style.animation = "rotatefan  0.25s linear infinite";
    
}