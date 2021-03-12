var Session = (function () {

  var isConnecte = function () {
    return localStorage.getItem('connecte');;
  };

  var setConnecte = function (s) {
    localStorage.setItem('connecte', s);
  };

  var setId = function (s) {
    localStorage.setItem('id', s);
  };

  var getId = function () {
    return localStorage.getItem('id');;
  };

  var getPseudo = function () {
    return localStorage.getItem('login');;
  };

  var setPseudo = function (p) {
    localStorage.setItem('login', p);
  };

  var getNom = function () {
    return localStorage.getItem('nom');;
  };

  var setNom = function (p) {
    localStorage.setItem('nom', p);
  };

  var getPrenom = function () {
    return localStorage.getItem('prenom');;
  };

  var setPrenom = function (p) {
    localStorage.setItem('prenom', p);
  };

  return {
    isConnecte: isConnecte,
    setConnecte: setConnecte,
    setId: setId,
    getId: getId,
    getPseudo: getPseudo,
    setPseudo: setPseudo,
    getNom: getNom,
    setNom: setNom,
    getPrenom: getPrenom,
    setPrenom: setPrenom
  }

})();

export default Session;