const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = 'José Ferreira';
  let lang = 'Python';
  res.render('index', {
    name,
    lang,
    empresa: 'IFPB',
    inscritos: 2000,
  });
});

app.listen(3000, () => {
  console.log('App online on http://localhost:3000');
});
