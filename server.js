//Etape 1 : Commande pour importer le package http de node -- importe un objet JS qui permet de creer un server
const http = require('http')
const app = require('./app')

// on indique sur quel port va tourner l'app
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);

//Etape 2 : on utilise la methode createServer de l'objet http qui permet la creation d'un server node ! La methode recoit en argument la fonction qui intègrera la requete (req) et la reponse (res)
const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

const server = http.createServer(app)

// => Le serveur est pret

//Etape 3 : On appelle la methode listen() pour que le serveur écoute les appels avec en argument le n° du port à écouter (par défault on utilise le port 3000 au cas où il ne soit pas dispo on peut utiliser un port d'environnement process.env.PORT)
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);