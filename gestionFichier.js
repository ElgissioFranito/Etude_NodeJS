const { log } = require('console');
const fs = require('fs');

// // CREATION D'UN DOSSIER
// if (fs.existsSync('./mesFichiers')) {
//     console.log('le dossier existe déjà');
//     fs.rmdir('./mesFichiers',
//         (erreur) => {           // fonction appeler lorsque l'instruction est terminér
//             if (erreur) {
//                 console.log(erreur);
//             } else {
//                 console.log("Dossier supprimé !!");
//             }
//         })
// } else {
//     fs.mkdir('./mesFichiers',
//         (erreur) => {           // fonction appeler lorsque l'instruction est terminér
//             if (erreur) {
//                 console.log(erreur);
//             } else {
//                 console.log("Dossier créé !!");
//             }
//         })
// }


// CREATION D'UN FICHIER
if (fs.existsSync('./mesFichiers/autoPresent.txt')) {
    fs.readFile('./mesFichiers/autoPresent.txt',
        (erreur, data) => {
            if (erreur) {
                console.log(erreur);
            } else {
                console.log(data.toString());
            }
        }
    )
} else {
    fs.writeFile('./mesFichiers/autoPresent.txt',
        "Je m'appele Randriamanarina Franito Elgissio",
        (erreur) => {           // fonction appeler lorsque l'instruction est terminér
            if (erreur) {
                console.log(erreur);
            } else {
                console.log("Fichier créé !!");
            }
        })
}
