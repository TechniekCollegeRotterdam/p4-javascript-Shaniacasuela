//Oefening angry-birds
//image opgehaald uit html
const bird = document.querySelector(".bird");
let px = 0;

bird.addEventListener("click",function(){
    //elke keer als ik op de bird klik wordt er 50 opgeteld
    //bij de variabele px
    px= px + 50;
//voeg styling toe aan je bird class met property
//left: 50px
bird.style.left = px + "px";

})

window.addEventListener("keydown",function(e){

    if(e.key == "ArrowRight"){
        px= px + 50;
        bird.style.left = px + "px";
    }
    if(e.key == "ArrowLeft"){
        px= px - 50;
        bird.style.left = px + "px";
    }

    if(e.key == "ArrowUp"){
        px= px + 50;
        bird.style.bottom = px + "px";
    }

    if(e.key == "ArrowDown"){
        px= px - 50;
        bird.style.bottom = px + "px";
    }

})