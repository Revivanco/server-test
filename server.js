const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get('/inicio', (req, res) => {
    res.send('¡Hola, mundo desde la pagina de inicio');
});

app.get('/paginaPrincipal', (req, res) => {
    res.send('¡Hola, mundo desde la pagina principal!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});