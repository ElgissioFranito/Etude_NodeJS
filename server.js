// importation du module 
const http = require("http");
const fs = require("fs");

// création du serveur
const server = http.createServer((request, response) => {
    // console.log("Serveur créé!");                                   // action à faire quand le serveur sera créer

    // console.log(request);
    // console.log(request.method);
    // console.log(request.url);

    // if (request.url === "/accueil") {
    //     console.log(" Bienvenu très cher developpeur! ");
    // } else if (request.url === "/profil") {
    //     console.log(" Vous êtes un developpeur backend ");
    // } else {
    //     console.log(" URL invalide ");
    // }

    // ENVOIE DE RESPONSE (text/plain)

    // // definition de l'entete de la reponse (setHeader)
    // response.setHeader("content-type", "text/plain");

    // // definition de contenu de la reponse selon la demande du client
    // if (request.url === "/accueil") {
    //     response.write(" Bienvenu très cher developpeur! ");
    // } else if (request.url === "/profil") {
    //     response.write(" Vous êtes eun developpeur backend ");
    // } else {
    //     response.write(" URL invalide ");
    // }

    // // ENVOIE DE RESPONSE (text/html)

    // // definition de l'entete de la reponse (setHeader)
    // response.setHeader("content-type", "text/html");

    // // definition de contenu de la reponse selon la demande du client
    // response.write('<head><meta charset="utf8"></head>');
    // if(request.url === "/accueil"){
    //     response.write(" <h1> Bienvenu très cher developpeur! </h1>");
    // } else if(request.url === "/profil"){
    //     response.write(" <h1> Vous êtes un developpeur backend </h1>");
    // } else {
    //     response.write(" <h1> URL invalide </h1>");
    // }


    // // ENVOIE DE RESPONSE FICHIER (BEST PRACTICE)

    // // definition de l'entete de la reponse (setHeader)
    response.setHeader("content-type", "text/html");

    // definition de la contenue de la reponse selon la demande du client
    let fichier = "";

    if (request.url === "/accueil") {
        fichier = "./IHM/accueil.html";
    } else if (request.url === "/profil") {
        fichier = "./IHM/profil.html";
    } else {
        fichier = "./IHM/invalid.html";
    }

    fs.readFile(fichier, (erreur, data) => {
        if (erreur) {
            console.log(erreur);
            response.end();
        } else {
            response.write(data);
            response.end();
            // response.end(data); on peut aussi faire ça s'il n'ya qu'une seul reponse à envoyer
        }
    })

    // fermeture de la reponse
})

// écoute des réquetes
server.listen(
    3001,                                             // le port
    "localhost",                                        // l'adresse IP, il prend "localhost" par defaut meme si on ne le mentionne pas ici
    () => {
        console.log("Serveur prêt à écouter!");           // action à faire quand le serveur sera prêt à écouter
    })