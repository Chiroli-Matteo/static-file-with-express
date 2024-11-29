// Importa i moduli necessari
const express = require('express');
const path = require('path');

// Crea l'app Express
const app = express();

// Definisci la porta su cui il server ascolterà
const PORT = 3000;

// Configura la rotta per la homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Configura la rotta per la pagina "About"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Configura la rotta per la pagina "Sitemap"
app.get('/sitemap', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap.html'));
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
