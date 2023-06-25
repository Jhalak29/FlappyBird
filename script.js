var pipe1_hg;
var hole1_hg;
var pipe2_hg;

setInterval(() => {
    pipe1_hg=Math.floor(Math.random()*350)+50;
    hole1_hg=Math.floor(Math.random()*70)+120;
    document.getElementById("pipe1").style.height=pipe1_hg+"px";
    document.getElementById("pipe2").style.top=pipe1_hg+hole1_hg+"px";
    document.getElementById("pipe2").style.height=570-(pipe1_hg+hole1_hg)+"px";

}, 4000);

var elem=document.getElementById("bird");

//gravity functionality

setInterval(() => {
    var x = parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
    if(x<=510){
    elem.style.top = (x + 3) + "px";
     }
    else{
        alert("You Lost !! your score is: "+score);
        elem.style.top=100+"px";
       window.location.reload();
    }
}, 30);

 
//fly functionality

function jump(){
    var fly=parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
    if(fly>=14){
        elem.style.top=(fly-40)+"px";
    }
}

document.addEventListener('keyup', event =>{
    if(event.code==='Space'){
        jump();
    }
})


//score functionality

var score=0;
setInterval(() => {
    score++;
    document.getElementById("score").innerHTML=score;
}, 4000);


//obstacle functionality

function checkcollision(bird,pipe){
    var elm1Rect = bird.getBoundingClientRect();
    var elm2Rect=pipe.getBoundingClientRect();

    return(elm1Rect.right >= elm2Rect.left && 
        elm1Rect.left <= elm2Rect.right) && 
       ( elm1Rect.bottom>=elm2Rect.top && 
            elm1Rect.top<=elm2Rect.bottom);
}

setInterval(() => {
    if(checkcollision(document.getElementById("bird"),document.getElementById("pipe1"))){
        elem.style.top=513+"px";
        setTimeout(() => {
            alert("You Lost !! Your Score is: "+score);
            return;
        }, 10);
        window.location.reload();
    }
    else if(checkcollision(document.getElementById("bird"),document.getElementById("pipe2"))){
        elem.style.top=513+"px";
        setTimeout(() => {
           alert("You Lost!! Your Score is: "+score);
            return;
       }, 10);
        window.location.reload();
    }
}, 100);



