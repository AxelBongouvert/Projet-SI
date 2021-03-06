# Projet Dana - Déménagement avec notre application

##  Installation via NPM

Commandes à exécuter dans les dossiers avant de pouvoir exécuter le client et le serveur.

### \dana\client 
-> `npm install`
-> `npm install axios`

### \dana\serveur
-> `npm install`
-> `npm install express`
-> `npm install sqlite3`
-> `npm install cors`

## Exécution du client (1er terminal)

Démarrage du client depuis le dossier \dana\client :
-> `npm start`

## Exécution du serveur (2nd terminal)

Démarrage du serveur depuis le dossier \dana\serveur :
-> `node serveur.js`

## Utilisation de Git

Lorsque vous souhaitez push ou pull des modifications, vous devez d'abord commit les fichiers modifiés via git add et git commit.
Si votre push/pull ne passe pas, regardez bien la console, git vous dira si vous avez oublier de pull ou de push des modifications récentes.
Vous ne pouvez pas push/pull si git bloque votre commande.

-> `git add --all`
-> `git commit -m "..."`
-> `git pull [nom source local] [nom dépôt distant]`
-> `git push [nom source local] [nom dépôt distant]`
(Pas besoin des [] pour les noms des sources).

Le dépôt local, si vous ne l'avez pas renommé, s'appelle origin.
Le dépôt distant s'appelle master.