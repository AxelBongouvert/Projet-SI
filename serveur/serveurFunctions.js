//////////////////////////////////////////////////////////////////////
// serveur nodeJs                                                   //
// Fichier : serveurFunctions.js (fichier outils du serveur)        //
// Auteur :                                                         //
// Version : 1.0 (2021_03_10)                                       //
//////////////////////////////////////////////////////////////////////


const crypto = require('crypto');


//############################################################################################ FONCTION ############################################################################################

// Execute le statement sur toutes les iterations de tabValues, dans l'odre, en série, à partir d'index. effectue traitement une fois toutes les iterations de statement executé.
function sqlInsert(statement, tabValues, resJson=[], index=0, traitement) {
	statement.run(tabValues[index], function(err, row) {
		if (err) {
			console.error(err.message);
		}
		resJson.push(this.lastID);

		if ( index == tabValues.length-1) {
			traitement(resJson);
		} else {
			sqlInsert(statement,tabValues,resJson,++index,traitement);
		}
	})
}

//############################################################################################ FONCTION OUTILS ############################################################################################

//Vérifie un boolean passé en paramètre, pour true ou false,
// renvoie respectivement 1 ou 0, sinon renvoi null
function booleanToInt(boolToCheck) {
	if ( boolToCheck === true) {
		return 1;
	} else if ( boolToCheck === false) {
		return 0;
	} else {
		return null;
	}
}

//Vérifie un entier passé en paramètre, si il est égal à 0 ou 1
// renvoie respectivement false ou true, sinon renvoi null
function intToBoolean(intToCheck){
	if (intTocheck === 0 ) {
		return false;
	} else if (intToCheck === 1 ) {
		return true;
	} else {
		return null;
	}
}


//Hash un mot de passe
function hashPwd(pwd) {
	var hashedPwd = crypto.pbkdf2Sync(pwd, 's4d54sdf54s', 10000, 64, 'sha512');
	return hashedPwd
}


module.exports = {sqlInsert,booleanToInt, intToBoolean, hashPwd};