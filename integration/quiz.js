let resultatFinal = document.getElementById("button");
resultatFinal.addEventListener("click", verifierRadio1);
resultatFinal.addEventListener("click", VerifierChekbox)
function verifierRadio1(){

    var Macron = document.getElementById("question1a").checked
    var Lepen = document.getElementById("question1b").checked
    var Bisounours = document.getElementById("question1c").checked
    var check = document.getElementById("check1");     
       
if (Bisounours== true)

{
    check.innerHTML= "Bonne réponse pour la question 1";
    
}
if (Lepen== true)
{   
    check.innerHTML = "Mauvaise réponse pour la question 1"; 
  }
  if (Macron== true)
{   
    check.innerHTML = "Mauvaise réponse pour la question 1"; 
  }
}
function VerifierChekbox () {
    const Q1 = document.querySelector("input[name='question2']:checked").value;
//var chorba = document.getElementById("question2a")
//var brick = document.getElementById("question2b")
//var couscous = document.getElementById("question2c")
var check2 = document.getElementById("reponse")  
if (Q1 == "Chorba")
{
    check2.innerHTML = "Mauvaise réponse pour la question 2";
}
if (Q1 == "Brick")
{
    check2.innerHTML = "Bonne réponse pour la question 2";
}
if (Q1 == "Couscous")
{
    check2.innerHTML = "Mauvaise réponse pour la question 2";
}}