
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
    suppresion en cascade ou osef ? 

*/

// Connexion à la BDD SQLite
let db = new sqlite3.Database('./BddDana.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connecté à la BDD SQLite');
});

//############################################################################################ CAMION ############################################################################################

//Liste des camions ayant un certain volume minimum
<<<<<<< HEAD
var corsOptions = {
  origin : 'http://http://localhost:3001/CheckCamions'
}

app.get('/camion/:volumeMin',cors(corsOptions), (req,res) => {
	console.log("get sur /camion/:volumeMin");
  var volumeMin = parseInt(req.params.volumeMin);1
=======
app.get('/camion/:volumeMin', (req,res) => {
	var volumeMin = parseInt(req.params.volumeMin);
  console.log("requete des camions");
>>>>>>> 746f4ff963f8487c905875ce1bb2c9b5754bccef
	const sqlString = "SELECT * FROM Camion WHERE volume >= ?";
	const values = [volumeMin];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json(rows);
  });
})

//insertion d'une liste de camions
app.post('/camion',  (req,res) => {
  console.log("post sur /camion");

	var body = req.body;
  const camions = body.map((m) => { return Object.values(m)});

  let sqlString = "INSERT INTO Camion (description, largeur, hauteur, profondeur, permisMin, volume) VALUES (?,?,?,?,?,?)";
  let statement = db.prepare(sqlString);
  //camions.forEach( carton => console.log("UN CAMION : " + JSON.stringify(camion)));
  
  camions.forEach( camion => statement.run(camion, function(err, row) {
    if (err) {
      console.error(err.message);
    }
  }))
  res.status(200).json({});
})

//Modification d'un camion
app.put('/camion',  (req,res) => {
  console.log("put sur /camion");

  var body = req.body;
  const camion = Object.values(body);

  let sqlString = "UPDATE Camion SET description=?, largeur=?, hauteur=?, profondeur=?, permisMin=?, volume=? WHERE id = ?";
  const values = camion;

  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})

//Suppresion d'un camion
app.delete('/camion', (req,res) => {
  console.log("delete sur /camion");

  var id = req.body.id;

  let sqlString = "DELETE FROM Camion WHERE id = ?";
  const values = [id];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})

//############################################################################################ CARTON ############################################################################################

//Liste des cartons d'une salle
app.get('/carton/:idSalle', (req,res) => {
  console.log("get sur /carton/:idSalle");

	var idSalle = parseInt(req.params.idSalle);

	const sqlString = "SELECT Carton.id,photo,qrCode,volume,largeur,hauteur,poids,profondeur,fragile FROM Carton INNER JOIN Salle ON Carton.fk_id_salle = Salle.id WHERE Salle.id = ?";
	const values = [idSalle];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json(rows);
  });
})

//insertion d'une liste de cartons
app.post('/carton',  (req,res) => {
  console.log("post sur /carton");

	var body = req.body;
  const cartons = body.map((m) => { return Object.values(m)});

  let sqlString = "INSERT INTO Carton (photo, qrCode, volume, largeur, hauteur, poids, profondeur, fragile, fk_id_salle) VALUES (?,?,?,?,?,?,?,?,?)";
  let statement = db.prepare(sqlString);
  //cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
  
  cartons.forEach( carton => statement.run(carton, function(err, row) {
    if (err) {
      console.error(err.message);
    }
  }))
  res.status(200).json({});
})

//Modification d'un carton
app.put('/carton',  (req,res) => {
  console.log("put sur /carton");

  var body = req.body;
  const carton = Object.values(body);

  let sqlString = "UPDATE Carton SET photo=?, qrCode=?, volume=?, largeur=?, hauteur=?, poids=?, profondeur=?, fragile=?, fk_id_salle=? WHERE id = ?";
  const values = carton;

  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})

//Suppresion d'un carton
app.delete('/carton', (req,res) => {
  console.log("delete sur /carton");

  var id = req.body.id;

  let sqlString = "DELETE FROM Carton WHERE id = ?";
  const values = [id];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})

//############################################################################################ CONTENU CARTON ############################################################################################

//Liste des contenu cartons d'un carton
app.get('/contenuCarton/:idCarton', (req,res) => {
  console.log("get sur /contenuCarton/:idCarton");

	var idCarton = parseInt(req.params.idCarton);

	const sqlString = "SELECT ContenuCarton.id,description,fk_id_carton FROM ContenuCarton INNER JOIN Carton ON ContenuCarton.fk_id_carton = Carton.id WHERE Carton.id = ?";
	const values = [idCarton];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json(rows);
  });
})

//insertion d'une liste de contenuCartons
app.post('/contenuCarton',  (req,res) => {
  console.log("post sur /contenuCarton");

	var body = req.body;
  const contenuCartons = body.map((m) => { return Object.values(m)});

  let sqlString = "INSERT INTO ContenuCarton (description, fk_id_carton) VALUES (?,?)";
  let statement = db.prepare(sqlString);
  //cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
  
  contenuCartons.forEach( contenuCarton => statement.run(contenuCarton, function(err, row) {
    if (err) {
      console.error(err.message);
    }
  }))
  res.status(200).json({});
})

//Modification d'un contenuCarton
app.put('/contenuCarton',  (req,res) => {
  console.log("put sur /contenuCarton");

  var body = req.body;
  const contenuCarton = Object.values(body);

  let sqlString = "UPDATE ContenuCarton SET description=?, fk_id_carton=? WHERE id = ?";
  const values = contenuCarton;

  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})

//Suppresion d'un contenuCarton
app.delete('/contenuCarton', (req,res) => {
  console.log("delete sur /contenuCarton");

  var id = req.body.id;

  let sqlString = "DELETE FROM ContenuCarton WHERE id = ?";
  const values = [id];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})


//############################################################################################ SALLE ############################################################################################

//Liste des salle d'un logement
app.get('/salle/:idLogement', (req,res) => {
  console.log("get sur /salle/:idLogement");

	var idLogement = parseInt(req.params.idLogement);

	const sqlString = "SELECT Salle.id,nom,couleur,superficie,fk_id_logement FROM Salle INNER JOIN Logement ON Salle.fk_id_logement = Logement.id WHERE Logement.id = ?";
	const values = [idLogement];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json(rows);
  });
})

//insertion d'une liste de salle
app.post('/salle',  (req,res) => {
  console.log("post sur /salle");

	var body = req.body;
  const salles = body.map((m) => { return Object.values(m)});

  let sqlString = "INSERT INTO Salle (nom,couleur,superficie,fk_id_logement) VALUES (?,?,?,?)";
  let statement = db.prepare(sqlString);
  //cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
  
  salles.forEach( salle => statement.run(salle, function(err, row) {
    if (err) {
      console.error(err.message);
    }
  }))
  res.status(200).json({});
})

//Modification d'une salle
app.put('/salle',  (req,res) => {
  console.log("put sur /salle");

  var body = req.body;
  const salle = Object.values(body);

  let sqlString = "UPDATE Salle SET nom=?,couleur=?,superficie=?,fk_id_logement=? WHERE id = ?";
  const values = salle;

  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})

//Suppresion d'une salle
app.delete('/salle', (req,res) => {
  console.log("delete sur /salle");

  var id = req.body.id;

  let sqlString = "DELETE FROM Salle WHERE id = ?";
  const values = [id];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})


//############################################################################################ LOGEMENT ############################################################################################

//Liste des Logement ?
app.get('/logement', (req,res) => {
  console.log("get sur /Logement TODO");
  res.status(500).json({});

  /*
	var idLogement = parseInt(req.params.idLogement);

	const sqlString = "SELECT Salle.id,nom,couleur,superficie,fk_id_logement FROM Salle INNER JOIN Logement ON Salle.fk_id_logement = Logement.id WHERE Logement.id = ?";
	const values = [idLogement];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json(rows);
  });
  */
})

//insertion d'une liste de logement
app.post('/logement',  (req,res) => {
  console.log("post sur /logement");

	var body = req.body;
  const logements = body.map((m) => { return Object.values(m)});

  let sqlString = "INSERT INTO Logement (adresse, typeLogement, etage, description) VALUES (?,?,?,?)";
  let statement = db.prepare(sqlString);
  //cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
  
  logements.forEach( logement => statement.run(logement, function(err, row) {
    if (err) {
      console.error(err.message);
    }
  }))
  res.status(200).json({});
})

//Modification d'un logement
app.put('/logement',  (req,res) => {
  console.log("put sur /logement");

  var body = req.body;
  const logement = Object.values(body);

  let sqlString = "UPDATE logement SET adresse=?, typeLogement=?, etage=?, description=? WHERE id = ?";
  const values = logement;

  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
})

//Suppresion d'un logement
app.delete('/logement', (req,res) => {
  console.log("delete sur /logement");

  var id = req.body.id;

  let sqlString = "DELETE FROM Logement WHERE id = ?";
  const values = [id];
  db.all(sqlString, values, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    //console.log(rows);
    res.status(200).json({});
  });
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
