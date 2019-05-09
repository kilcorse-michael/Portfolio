const express = require('express');
const pug = require('pug');
const app = express();
const fs = require("fs");
const contents = fs.readFileSync("data.json");
const jsonData = JSON.parse(contents);
const path = require('path');
const port = 5000;
const routes = require('./routes')


app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/projects/static/img', express.static(path.join(__dirname, 'img')));
app.use(routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log('Uh-Oh! There seems to have been an error!')
  res.render('error');
});

app.listen(port, function(){
  console.log('Server running on port: 5000');
});
