// Importation du module HTTP natif de Node.js
const http = require('http');

// Configuration du serveur : Port et hôte
const HOST = '127.0.0.1';  // Adresse locale
const PORT = 3000;          // Port sur lequel le serveur écoutera

// Création du serveur HTTP
const server = http.createServer((req, res) => {
  // Logique du serveur pour gérer les requêtes

  // Route d'accueil
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenue sur le serveur Node.js!\n');
  }

  // Route pour obtenir l'heure actuelle
  else if (req.method === 'GET' && req.url === '/api/time') {
    const currentTime = new Date().toISOString();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ currentTime }));
  }

  // Gestion des routes non trouvées
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Page non trouvée\n');
  }
});

// Démarrage du serveur
server.listen(PORT, HOST, () => {
  console.log(`Le serveur écoute à l'adresse http://${HOST}:${PORT}`);
});
