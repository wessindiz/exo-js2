
let tab=new Array();
function add_nom(){
    tab.push(prompt("Saisir un nom"));
}
function tirage(){
    if(tab.length>0){
    let rand = Math.floor(Math.random()*tab.length);
    alert("Le nom gagnant est : "+tab[rand]);
    }
    else alert("Veillez ajouter des noms");
}
