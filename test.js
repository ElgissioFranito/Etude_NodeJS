const matiere = require("./scolarite");
const { cours } = require("./scolarite");

console.log(matiere);       // affichera tous les modules exportés (variable, function,...) par le fichier scolarite.js (la variable cours)
console.log(cours);       // affichera seulement la variable "cours" parmis tous les modules exportés par le fichier scolarite.js

console.log("-------------------------");


const systeme = require("os");
// console.log(systeme);       // affichera tous les modules exportés par le module "os"

console.log(systeme.userInfo());       // affichera l'information de l'utilisateur connecté au système
console.log(systeme.version());       // affichera la version du système d'exploitation
