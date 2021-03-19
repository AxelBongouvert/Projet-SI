var Session = (function () {
	
	var isConnecte = function () {
		return localStorage.getItem('connecte');;
	};
	
	var setConnecte = function (s) {
		localStorage.setItem('connecte', s);
	};
	
	var getId = function () {
		return localStorage.getItem('id');;
	};
	
	var setId = function (s) {
		localStorage.setItem('id', s);
	};
	
	var getPseudo = function () {
		return localStorage.getItem('pseudo');;
	};
	
	var setPseudo = function (s) {
		localStorage.setItem('pseudo', s);
	};
	
	var getIdDemenagement = function () {
		return localStorage.getItem('idDemenagement');;
	};
	
	var setIdDemenagement = function (s) {
		localStorage.setItem('idDemenagement', s);
	};
	
	var getIdLogementDepart = function () {
		return localStorage.getItem('idLogementDepart');;
	};
	
	var setIdLogementDepart = function (s) {
		localStorage.setItem('idLogementDepart', s);
	};
	
	var getIdLogementArrivee = function () {
		return localStorage.getItem('idLogementArrivee');;
	};
	
	var setIdLogementArrivee = function (s) {
		localStorage.setItem('idLogementArrivee', s);
	};
	
	var getIdSalle = function () {
		return localStorage.getItem('IdSalle');;
	};
	
	var setIdSalle = function (p) {
		localStorage.setItem('IdSalle', p);
	};

	var getSalleActuelle = function () {
		return localStorage.getItem('salleActuelle');;
	};
	
	var setSalleActuelle = function (p) {
		localStorage.setItem('salleActuelle', p);
	};
	
	var getIdCarton = function () {
		return localStorage.getItem('IdCarton');;
	};
	
	var setIdCarton = function (p) {
		localStorage.setItem('IdCarton', p);
	};

	return {
		isConnecte: isConnecte,
		setConnecte: setConnecte,
		getId: getId,
		setId: setId,
		getPseudo: getPseudo,
		setPseudo: setPseudo,
		getIdDemenagement: getIdDemenagement,
		setIdDemenagement: setIdDemenagement,
		getIdLogementDepart: getIdLogementDepart,
		setIdLogementDepart: setIdLogementDepart,
		getIdLogementArrivee: getIdLogementArrivee,
		setIdLogementArrivee: setIdLogementArrivee,
		getIdSalle: getIdSalle,
		setIdSalle: setIdSalle,
		getSalleActuelle: getSalleActuelle,
		setSalleActuelle: setSalleActuelle,
		getIdCarton: getIdCarton,
		setIdCarton: setIdCarton
	}
	
})();

export default Session;