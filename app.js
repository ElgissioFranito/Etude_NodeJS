const { log } = require('console');
const express = require('express');

const app = express();
const port = 3000;


// endpoint

app.get('/', (req, res) => res.send("Hello Express 😚 !!"));

app.get('/pokemon/1',(req,res) => res.send("Les informations du Pokemon n°1! Il s'appele bulbizar"));

app.get('/pokemon/:iden',(req,res) => {
    const identifiant = req.params.iden;
    res.send(`vous avez demander le pokemon n°${identifiant}`);
});
   
app.get('/pokemon/:id/:name',(req,res) => {
    const identifiant = req.params.id;
    const name = req.params.name;
    res.send(`vous avez demander le pokemon n°${identifiant} qui s'appele ${name}`);
});

// écoute du server sur le port 3000
app.listen(port, () => {console.log(`notre application démarre sur : http://localhost:${port}`)});

