
var counter = 1;
var comments = ["hsen looser", "you cant", "booo!", "hahahaha", "stop trying stupid"];
document.getElementById("i").onmouseover = function(){
    var a = ((counter*200)%700);
    var num = ((Math.pow(-1,counter)*8*counter)%35).toString();
    this.style.transform = "translateX("+a+"px) translateY("+a+"px) rotate("+num+"deg)" ;
    counter++;
    
    document.getElementById("comment").innerHTML = comments[counter%5]  ;
    
    }

document.getElementById("i").onclick = function(){
    alert("wallah inak w7sh");
}   

  