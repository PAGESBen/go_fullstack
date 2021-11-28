// on importe express

const express = require('express')

// Creation de la constante qui contiendra l'application

const app = express()

//on crée des middleware, l'attribut next permet de passer au middleware suivant : 

// Pour permettre au serveur de capturer les données qui sont dans la requete et qui ont un content type Json on utilise le middleware suivant : 

app.use(express.json())

/*middleware qui permet d'implémenter CORS */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body)
    res.status(201).json('bien reçu')
})

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
          _id: 'oeihfzeoi',
          title: 'Mon premier objet',
          description: 'Les infos de mon premier objet',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
          price: 4900,
          userId: 'qsomihvqios',
        },
        {
          _id: 'oeihfzeomoihi',
          title: 'Mon deuxième objet',
          description: 'Les infos de mon deuxième objet',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
          price: 2900,
          userId: 'qsomihvqios',
        },
      ];
      res.status(200).json(stuff)
})

// On exporte l'app pour pouvoir l'utiliser dans les autres fichiers

module.exports = app