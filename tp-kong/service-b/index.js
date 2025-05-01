const express = require('express');
const app = express();
const PORT = 3002;

const products = [
  { id: 1, name: 'Phone' },
  { id: 2, name: 'Laptop' }
];

// L'endpoint doit être à la racine `/` pour que Kong puisse l'atteindre
app.get('/', (req, res) => res.json(products));

app.listen(PORT, () => console.log(`Service B running on :${PORT}`));
