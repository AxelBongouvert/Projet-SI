//////////////////////////////////////////////////////////////////////
// Serveur nodeJs                                                   //
// Fichier : serveur.js                                             //
// Auteur :                                                         //
// Version : 1.0 (2021_03_10)                                       //
//////////////////////////////////////////////////////////////////////


const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const functions = require("./serveurFunctions");
const PORT_ECOUTE_SERVEUR = 5000

/*
https://www.sqlitetutorial.net/sqlite-nodejs/
https://github.com/mapbox/node-sqlite3/wiki


*/

// Connexion à la BDD SQLite
let db = new sqlite3.Database('./BddDana.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connecté à la BDD SQLite');
});

//############################################################################################ CONNEXION ############################################################################################

//Connexion 
app.post('/connexion', (req,res) => {
	console.log("post sur /connexion");
	
	var body = req.body;
	const pseudoMdp = Object.values(body);
	pseudoMdp[1] = functions.hashPwd(pseudoMdp[1]);
	
	const sqlString = "SELECT Client.id FROM Compte INNER JOIN Client on Compte.id = Client.fk_id_compte WHERE pseudo = ? AND mdp = ?";
	const values = pseudoMdp;
	
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		if (rows[0] != null) {
			res.status(200).json({"connexion":true,"id":rows[0].id});
		} else {
			res.status(200).json({"connexion":false,"id":null});
		}
	});
})



//############################################################################################ COMPTE CLIENT ############################################################################################


//Liste de tous les compte client
app.get('/client', (req,res) => {
	console.log("get sur /client");
	
	const sqlString = "SELECT Client.id,nom,prenom,type,email,pseudo FROM Client INNER JOIN Compte ON Client.fk_id_compte = Compte.id";
	const values = [];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		res.status(200).json(rows);
	});
})

//Information d'un compte client
app.get('/client/:idClient', (req,res) => {
	console.log("get sur /client/:idClient");

  var idClient = parseInt(req.params.idClient);
	
	const sqlString = "SELECT Client.id,nom,prenom,type,email,pseudo FROM Client INNER JOIN Compte ON Client.fk_id_compte = Compte.id WHERE Client.id = ?";
	const values = [idClient];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		res.status(200).json(rows);
	});
})

//insertion d'une liste de compte client
app.post('/client',  (req,res) => {
	console.log("post sur /client");
	
	var body = req.body;
	const clients = body.map((m) => { return Object.values(m)});
	let sqlStringCompte = "INSERT INTO Compte (pseudo,mdp) VALUES (?,?)";
	let sqlStringClient = "INSERT INTO Client (nom,prenom,type,email,fk_id_compte) VALUES (?,?,?,?,?)";
	
	let statementCompte = db.prepare(sqlStringCompte);
	let statementClient = db.prepare(sqlStringClient);
	
	var valuesComptes = [];
	clients.forEach( client => {
		valuesComptes.push(client.slice(4,6))
		valuesComptes[valuesComptes.length-1][1] = functions.hashPwd(valuesComptes[valuesComptes.length-1][1]);
	});

	tabIdComptes = [];
	functions.sqlInsert(statementCompte,valuesComptes,[],0, (resJson) => {
		// ICI TOUS LES COMPTES ON ETE CREE ET ON A LA LISTE DES ID DANS LORDRE
		tabIdComptes = resJson;
		valuesClients = [];

		clients.forEach( client => {
			temp = client.slice(0,4);
			temp.push(tabIdComptes.shift());
			valuesClients.push(temp);
		});
		functions.sqlInsert(statementClient,valuesClients,[],0, (resJsonIdClient) => {
			// ICI TOUS LES CLIENTS ON ETE CREE ET ON A LA LISTE DES ID CLIENT DANS LORDRE
			res.status(200).json({"id":resJsonIdClient});
		});
	});
})


//Modification d'un comtpe client
app.put('/client',  (req,res) => {
	console.log("put sur /client");
	
	var body = req.body;
	const client = Object.values(body);
	
	const values = client;
	
  let sqlStringCompte = "UPDATE Compte SET mdp=? FROM (SELECT fk_id_compte FROM Client WHERE id = ?) WHERE id = fk_id_compte";
	let sqlStringClient = "UPDATE Client SET nom=?,prenom=?,type=?,email=? WHERE id = ?";
	
	let statementCompte = db.prepare(sqlStringCompte);
	let statementClient = db.prepare(sqlStringClient);
	
	var valuesCompte = client.slice(4,6);
	var valuesClient = client;
  valuesClient.splice(4,1);
  
  valuesCompte[0] = functions.hashPwd(valuesCompte[0]);
			
	statementCompte.run(valuesCompte, function(err, row) {
		if (err) {
			console.error(err.message);
		} else {
			
			statementClient.run(valuesClient, function(err, row) {
				if (err) {
					console.error(err.message);
				}
				res.status(200).json({});
			});
		}
	});
})


//Suppresion d'un client
app.delete('/client', (req,res) => {
	console.log("delete sur /client");
	
	var id = req.body.id;
	
	let sqlString = "DELETE FROM Client WHERE id = ?";
	const values = [id];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		res.status(200).json({});
	});
})





//############################################################################################ CAMION ############################################################################################

//Liste des camions ayant un certain volume minimum
app.get('/camion/:volumeMin', (req,res) => {
	var volumeMin = parseInt(req.params.volumeMin);
	console.log("requete des camions");
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

  functions.sqlInsert(statement,camions,[],0, (resJson) => {
		res.status(200).json({"id":resJson});
	});
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
app.get('/cartonParSalle/:idSalle', (req,res) => {
	console.log("get sur /cartonParSalle/:idSalle");
	
	var idSalle = parseInt(req.params.idSalle);
	
	const sqlString = "SELECT Carton.id,photo,qrCode,volume,largeur,hauteur,poids,profondeur,fragile FROM Carton INNER JOIN Salle ON Carton.fk_id_salle = Salle.id WHERE Salle.id = ?";
	const values = [idSalle];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		console.log(idSalle);
		res.status(200).json(rows);
	});
})

//Information d'un carton
app.get('/carton/:idCarton', (req,res) => {
	console.log("get sur /carton/:idCarton");
	
	var idCarton = parseInt(req.params.idCarton);
	console.log("carton : "+idCarton);
	const sqlString = "SELECT id,photo,qrCode,volume,largeur,hauteur,poids,profondeur,fragile,descriptionContenu,fk_id_salle FROM Carton WHERE id = ?";
	const values = [idCarton];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		console.log(rows);
		res.status(200).json(rows);
	});
})

//insertion d'une liste de cartons
app.post('/carton',  (req,res) => {
	console.log("post sur /carton");
	
	var body = req.body;
	const cartons = body.map((m) => { return Object.values(m)});
	
	let sqlString = "INSERT INTO Carton (photo, qrCode, volume, largeur, hauteur, poids, profondeur, fragile, descriptionContenu, fk_id_salle) VALUES (?,?,?,?,?,?,?,?,?,?)";
	let statement = db.prepare(sqlString);
	//cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
	
	functions.sqlInsert(statement,cartons,[],0, (resJson) => {
		res.status(200).json({"id":resJson});
	});
})

//Modification d'un carton
app.put('/carton',  (req,res) => {
	console.log("put sur /carton");
	
	var body = req.body;
	const carton = Object.values(body);
	
	let sqlString = "UPDATE Carton SET photo=?, qrCode=?, volume=?, largeur=?, hauteur=?, poids=?, profondeur=?, fragile=?, descriptionContenu=?, fk_id_salle=? WHERE id = ?";
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
	
	functions.sqlInsert(statement,salles,[],0, (resJson) => {
		res.status(200).json({"id":resJson});
	});
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

//Logement de depart d'un demenagement
app.get('/logementDepart/:idDemenagement', (req,res) => {
	console.log("get sur /LogementDepart/:idDemenagement");
	var idDemenagement = parseInt(req.params.idDemenagement);
	
	
	const sqlString = "SELECT Logement.id,adresse,typeLogement,etage,Logement.description FROM Logement INNER JOIN Demenagement ON Logement.id = Demenagement.fk_id_logementDepart WHERE Demenagement.id = ?";
	const values = [idDemenagement];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		res.status(200).json(rows);
	});
})

//Logement d'arrive d'un demenagement
app.get('/logementArrive/:idDemenagement', (req,res) => {
	console.log("get sur /LogementArrive/:idDemenagement");
	var idDemenagement = parseInt(req.params.idDemenagement);
	
	
	const sqlString = "SELECT Logement.id,adresse,typeLogement,etage,Logement.description FROM Logement INNER JOIN Demenagement ON Logement.id = Demenagement.fk_id_logementArrive WHERE Demenagement.id = ?";
	const values = [idDemenagement];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		res.status(200).json(rows);
	});
})

//insertion d'une liste de logement
app.post('/logement',  (req,res) => {
	console.log("post sur /logement");
	
	var body = req.body;
	const logements = body.map((m) => { return Object.values(m)});
	
	let sqlString = "INSERT INTO Logement (adresse, typeLogement, etage, description) VALUES (?,?,?,?)";
	let statement = db.prepare(sqlString);
	//cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
	
	functions.sqlInsert(statement,logements,[],0, (resJson) => {
		res.status(200).json({"id":resJson});
	});
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


//############################################################################################ DEMENAGEMENT ############################################################################################

//Liste des demenagement d'un client
app.get('/demenagement/:idClient', (req,res) => {
	console.log("get sur /demenagement/:idClient");
	
	var idClient = parseInt(req.params.idClient);
	
	const sqlString = "SELECT Demenagement.id,dateDebut,dateFin,numeroSuivi,mdpSuivi,fk_id_logementDepart,fk_id_logementArrive,fk_id_client,description FROM Demenagement INNER JOIN Client ON Demenagement.fk_id_client = Client.id WHERE Client.id = ?";
	const values = [idClient];
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		res.status(200).json(rows);
	});
})


//insertion d'une liste de demenagement
app.post('/demenagement',  (req,res) => {
	console.log("post sur /demenagement");
	
	var body = req.body;
	const demenagements = body.map((m) => { return Object.values(m)});
	
	let sqlString = "INSERT INTO Demenagement (dateDebut,dateFin,numeroSuivi,mdpSuivi,description,fk_id_logementDepart,fk_id_logementArrive,fk_id_client) VALUES (?,?, 'DANA' || (SELECT MAX(id)+1 FROM Demenagement),?,?,?,?,?)";
	let statement = db.prepare(sqlString);
	//cartons.forEach( carton => console.log("UN CARTON : " + JSON.stringify(carton)));
	
	functions.sqlInsert(statement,demenagements,[],0, (resJson) => {
		res.status(200).json({"id":resJson});
	});
})

//Modification d'un demenagement
app.put('/demenagement',  (req,res) => {
	console.log("put sur /demenagement");
	
	var body = req.body;
	const demenagement = Object.values(body);
	
	let sqlString = "UPDATE Demenagement SET dateDebut=?,dateFin=?,mdpSuivi=?,description=?,fk_id_logementDepart=?,fk_id_logementArrive=? WHERE id = ?";
	const values = demenagement;
	
	db.all(sqlString, values, (err, rows) => {
		if (err) {
			console.error(err.message);
		}
		//console.log(rows);
		res.status(200).json({});
	});
})

//Suppresion d'un demenagemment
app.delete('/demenagement', (req,res) => {
	console.log("delete sur /demenagement");
	
	var id = req.body.id;
	
	let sqlString = "DELETE FROM Demenagement WHERE id = ?";
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

//############################################################################################################################################################################################################
//############################################################################################ AUTRES / INUTILISE ############################################################################################
//############################################################################################################################################################################################################

/* // Code de fermeture de la connexion à la BDD SQLite
db.close((err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Close the database connection.');
});
*/


//############################################################################################ CONTENU CARTON ############################################################################################

/*
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
*/