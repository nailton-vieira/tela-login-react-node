const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Olá Mundo');
});

app.listen(3000, () => {
    console.log('Rodando servidopr na porta 3000');
});