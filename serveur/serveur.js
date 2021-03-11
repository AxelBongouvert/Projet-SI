//////////////////////////////////////////////////////////////////////
// Serveur nodeJs                                                   //
// Fichier : serveur.js                                             //
// Auteur :                                                         //
// Version : 1.0 (2021_03_10)                                       //
//////////////////////////////////////////////////////////////////////


const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const functions = require("./serveurFunctions");
const PORT_ECOUTE_SERVEUR = 5000

/*
  https://www.sqlitetutorial.net/sqlite-nodejs/
  https://github.com/mapbox/node-sqlite3/wiki
  
  Questions :
    coté client react, plutôt true/false ou 1/0 ? 

*/

// Connexion à la BDD SQLite
let db = new sqlite3.Database('./BddDana.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connecté à la BDD SQLite');
});

//############################################################################################ REQUETES DE LISTES ############################################################################################

//Liste des cartons d'une salle
app.get('/cartonList/:idSalle', (req,res) => {
	var idSalle = parseInt(req.params.idSalle);

	const sqlString = "SELECT Carton.id,photo,qrCode,volume,largeur,hauteur,poids,profondeur,fragile FROM Carton INNER JOIN Salle ON Carton.fk_id_salle = Salle.id WHERE Salle.id = ?";
	const values = [idSalle];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    console.log(rows);
    res.status(200).json(rows);
  });
})

//############################################################################################ REQUETES D'INSERTION ############################################################################################

//insertion d'une liste de cartons
app.post('/carton',  (req,res) => {
	var body = req.body;

  const cartons = body.map((m) => { return Object.values(m)});


  let sqlString = "INSERT INTO Carton (photo, qrCode, volume, largeur, hauteur, poids, profondeur, fragile, fk_id_salle) VALUES (?,?,?,?,?,?,?,?,?)";

  let statement = db.prepare(sqlString);

  cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
  
  cartons.forEach( carton => statement.run(carton, function(err, row) {
    if (err) {
      console.error(err.message);
    }
  }))
  res.status(200).json({});
})


//############################################################################################ LISTEN ############################################################################################
app.listen(PORT_ECOUTE_SERVEUR, () => {
  console.log('Serveur à l\'écoute sur le port ', PORT_ECOUTE_SERVEUR)
})

//############################################################################################ AUTRES ############################################################################################

/* // Code de fermeture de la connexion à la BDD SQLite
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
*/
