require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurer Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
app.get('/chambres', (req, res) => {
  res.render('chambres', { title: 'Nos chambres' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact',
    googleMapsKey: process.env.GOOGLE_MAPS_API_KEY
  });
});

app.get('/apropos', (req, res) => {
  res.render('apropos', { title: 'À propos' });
});