let nom = "Elgissio Franito";

function direBonjour(param) {
    console.log("Bonjour " + param);
}

// direBonjour(nom);

// console.log(global);

setTimeout(()=>{
    console.log("setTimeout 2s: haha");
},2000);                    // le console affichera "haha" après 2s

var temps = setInterval(()=>{
    console.log("setInterval 1.5s: haha");
},1500);                    // le console affichera "haha" tous les 1.5s

setTimeout(()=>{
    clearInterval(temps);
    console.log("setInterval 1.5s: haha a été arrêté");
},10000);                    // arrète la boucle setInterval et affiche "haha n'est plus"
