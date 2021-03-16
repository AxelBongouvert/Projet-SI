var Session = (function () {

  var isConnecte = function () {
    return localStorage.getItem('connecte');;
  };

  var setConnecte = function (s) {
    localStorage.setItem('connecte', s);
  };

  var getPseudo = function () {
    return localStorage.getItem('pseudo');;
  };

  var setPseudo = function (p) {
    localStorage.setItem('pseudo', p);
  };

  var getIdSalle = function () {
    return localStorage.getItem('idSalle');;
  };

  var setIdSalle = function (p) {
    localStorage.setItem('IdSalle', p);
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
    getPseudo: getPseudo,
    setPseudo: setPseudo,
    getIdSalle: getIdSalle,
    setIdSalle: setIdSalle,
    getIdCarton: getIdCarton,
    setIdCarton: setIdCarton
  }

})();

export default Session;