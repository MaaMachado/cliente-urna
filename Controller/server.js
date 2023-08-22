const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const votos = [];

app.post('/api/votos', (req, res) => {
  const novoVoto = req.body;
  votos.push(novoVoto);
  console.log(votos);
  res.status(201).json({ message: 'Voto registrado com sucesso!' });
});



app.get('/api/votos', (req, res) => {
  res.json(votos);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
