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
	
	return {
		isConnecte: isConnecte,
		setConnecte: setConnecte,
		getId: getId,
		setId: setId,
		getPseudo: getPseudo,
		setPseudo: setPseudo
	}
	
})();

export default Session;