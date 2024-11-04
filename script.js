//Variables de mon script
var pro = document.getElementById("profile");
var form = document.getElementById("formation");
var xp = document.getElementById("experience");
var sk = document.getElementById("skills");
var lan = document.getElementById("languages");
var inter = document.getElementById("interests");
var cont = document.getElementById("contact");

var PP = document.getElementById("ProfPerso");
var FO = document.getElementById("Format");
var EXP = document.getElementById("XpProf");
var COMP = document.getElementById("Comp");
var L = document.getElementById("Lang");
var CINT = document.getElementById("CenterInt");
var CONT = document.getElementById("Contact");

//met le background des bouttons en blanc
PP.style.background = "rgb(255, 255, 255)"
FO.style.background = "rgb(255, 255, 255)"
EXP.style.background = "rgb(255, 255, 255)"
COMP.style.background = "rgb(255, 255, 255)"
L.style.background = "rgb(255, 255, 255)"
CINT.style.background = "rgb(255, 255, 255)"

//toutes les fonction servent a faire apparaitre les element de mon CV, de plus lorsque l'on clique sur un ellement le backgroude passe au gris pour dire que l'on a deja vu cette ellement
//chaque element ferme l'element precedant
function ProfPerso() {
    if (pro.style.display === "block")  {
      pro.style.display = "none";
      PP.style.background = ""
    } 
    else {
      pro.style.display = "block";
      PP.style.background = "rgb(190, 190, 190)"
        
      FO.style.background = "rgb(255, 255, 255)"
      EXP.style.background = "rgb(255, 255, 255)"
      COMP.style.background = "rgb(255, 255, 255)"
      L.style.background = "rgb(255, 255, 255)"
      CINT.style.background = "rgb(255, 255, 255)"
      CONT.style.background = "rgb(255, 255, 255)"
        
      form.style.display = "none";
      xp.style.display = "none";
      sk.style.display = "none";
      lan.style.display = "none";
      inter.style.display = "none";
      cont.style.display = "none";
    }
}

function Format() {
      if (form.style.display === "block") {
        form.style.display = "none";
        FO.style.background = ""

      } else {
        form.style.display = "block";
        FO.style.background = "rgb(190, 190, 190)"
          
        PP.style.background = "rgb(255, 255, 255)"
        EXP.style.background = "rgb(255, 255, 255)"
        COMP.style.background = "rgb(255, 255, 255)"
        L.style.background = "rgb(255, 255, 255)"
        CINT.style.background = "rgb(255, 255, 255)"
        CONT.style.background = "rgb(255, 255, 255)"
          
        pro.style.display = "none";
        xp.style.display = "none";
        sk.style.display = "none";
        lan.style.display = "none";
        inter.style.display = "none";
        cont.style.display = "none";
      }
}
  
function XpProf() {
      if (xp.style.display === "block") {
        xp.style.display = "none";
        EXP.style.background = ""

        
      } else {
        xp.style.display = "block";
        EXP.style.background = "rgb(190, 190, 190)"
          
        PP.style.background = "rgb(255, 255, 255)"
        FO.style.background = "rgb(255, 255, 255)"
        COMP.style.background = "rgb(255, 255, 255)"
        L.style.background = "rgb(255, 255, 255)"
        CINT.style.background = "rgb(255, 255, 255)"
        CONT.style.background = "rgb(255, 255, 255)"
          
        pro.style.display = "none";
        form.style.display = "none";
        sk.style.display = "none";
        lan.style.display = "none";
        inter.style.display = "none";
        cont.style.display = "none";
      }
}
  
function Comp() {
      if (sk.style.display === "block") {
        sk.style.display = "none";
        COMP.style.background = ""

      } else {
        sk.style.display = "block";
        COMP.style.background = "rgb(190, 190, 190)"
          
        PP.style.background = "rgb(255, 255, 255)"
        FO.style.background = "rgb(255, 255, 255)"
        EXP.style.background = "rgb(255, 255, 255)"
        L.style.background = "rgb(255, 255, 255)"
        CINT.style.background = "rgb(255, 255, 255)"
        CONT.style.background = "rgb(255, 255, 255)"
          
        pro.style.display = "none";
        form.style.display = "none";
        xp.style.display = "none";
        lan.style.display = "none";
        inter.style.display = "none";
        cont.style.display = "none";
      }
}
  
function Lang() {
      if (lan.style.display === "block") {
        lan.style.display = "none";
        L.style.background = ""

      } 
      else {
        lan.style.display = "block";
        L.style.background = "rgb(190, 190, 190)"
          
        PP.style.background = "rgb(255, 255, 255)"
        FO.style.background = "rgb(255, 255, 255)"
        EXP.style.background = "rgb(255, 255, 255)"
        COMP.style.background = "rgb(255, 255, 255)"
        CINT.style.background = "rgb(255, 255, 255)"
        CONT.style.background = "rgb(255, 255, 255)"
          
        pro.style.display = "none";
        form.style.display = "none";
        xp.style.display = "none";
        sk.style.display = "none";
        inter.style.display = "none";
        cont.style.display = "none";
      }
}
  
function CenterInt() {
      if (inter.style.display === "block") {
        inter.style.display = "none";
        CINT.style.background = ""

      } else {
        inter.style.display = "block";
        CINT.style.background = "rgb(190, 190, 190)"
          
        PP.style.background = "rgb(255, 255, 255)"
        FO.style.background = "rgb(255, 255, 255)"
        EXP.style.background = "rgb(255, 255, 255)"
        COMP.style.background = "rgb(255, 255, 255)"
        L.style.background = "rgb(255, 255, 255)"
        CONT.style.background = "rgb(255, 255, 255)"
          
        pro.style.display = "none";
        form.style.display = "none";
        xp.style.display = "none";
        sk.style.display = "none";
        lan.style.display = "none";
        cont.style.display = "none";
      }
}

  
function Contact() {
  if (cont.style.display === "block") {
    cont.style.display = "none";
    CONT.style.background = ""

    
  } else {
    cont.style.display = "block";
    CONT.style.background = "rgb(190, 190, 190)"

    PP.style.background = "rgb(255, 255, 255)"
    FO.style.background = "rgb(255, 255, 255)"
    EXP.style.background = "rgb(255, 255, 255)"
    COMP.style.background = "rgb(255, 255, 255)"
    L.style.background = "rgb(255, 255, 255)"
    CINT.style.background = "rgb(255, 255, 255)"
    
    pro.style.display = "none";
    form.style.display = "none";
    xp.style.display = "none";
    sk.style.display = "none";
    lan.style.display = "none";
    inter.style.display = "none";
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


//envoi un mail, mais ne fonctionne pas pour le moment
var btn = document.getElementById('btn')
btn.addEventListener('click', function(e){
  e.preventDefault()
  var name = document.getElementById('fname')
  var mail = document.getElementById('maddress')
  var txt = document.getElementById('mcontent')
  var sub = document.getElementById('subject')
  var body = txt + '<br/>' + '<br/>' + name
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "malmon.gaspard@gmail.com",
    Password : "",
    To : 'malmon.gaspard@gmail.com',
    From : mail,
    Subject : sub,
    Body : body
  }).then(
  message => alert(message)
  );
})
