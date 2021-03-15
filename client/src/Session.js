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

  return {
    isConnecte: isConnecte,
    setConnecte: setConnecte,
    getPseudo: getPseudo,
    setPseudo: setPseudo
  }

})();

export default Session;