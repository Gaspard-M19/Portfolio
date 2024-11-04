//Variables de mon script
var bts = document.getElementById("projbts");
var epi = document.getElementById("projepi");

var BTS = document.getElementById("ProjetBTS");
var EPITECH = document.getElementById("ProjetEpitech");

//met le background des bouttons en blanc
BTS.style.background = "rgb(255, 255, 255)"
EPITECH.style.background = "rgb(255, 255, 255)"

//toutes les fonction servent a faire apparaitre les element de mon CV, de plus lorsque l'on clique sur un ellement le backgroude passe au gris pour dire que l'on a deja vu cette ellement
//chaque element ferme l'element precedant
function ProjetBTS() {
    if (bts.style.display === "block")  {
      bts.style.display = "none";
      BTS.style.background = ""
    } 
    else {
      bts.style.display = "block";
      BTS.style.background = "rgb(190, 190, 190)"
        
      EPITECH.style.background = "rgb(255, 255, 255)"
        
      epi.style.display = "none";
    }
}

function ProjetEpitech() {
    if (epi.style.display === "block")  {
      epi.style.display = "none";
      EPITECH.style.background = ""
    } 
    else {
      epi.style.display = "block";
      EPITECH.style.background = "rgb(190, 190, 190)"
        
      BTS.style.background = "rgb(255, 255, 255)"
        
      bts.style.display = "none";
    }
}


//lance l'annimation seulement lorsque l'on passe la souris sur la photo
const photo = document.querySelector("#pic");
photo.style.animationPlayState = 'paused'


photo.addEventListener('mouseover', () => {
  photo.style.animationPlayState = 'running';
});

photo.addEventListener('mouseout', () => {
  photo.style.animationPlayState = 'paused';
});