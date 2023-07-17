const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
});

app.get('/ask', (req, res) => {
  res.render('ask', {});
});

app.listen(3000, () => {
  console.log('App online on http://localhost:3000');
});
