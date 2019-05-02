const express = require('express');
const pug = require('pug');
const app = express();
const fs = require("fs");
const contents = fs.readFileSync("data.json");
const jsonData = JSON.parse(contents);
const path = require('path');
const port = 3000;
app.listen(port, function(){
  console.log('Server running on port: 3000');
});

app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/static/img', express.static(path.join(__dirname, 'img')));

app.get('/', (req, res)=>{
  res.render('index', {
    projects : jsonData.projects
  });

});

app.get('/about', (req, res)=>{
  res.render('about');
});


app.get('/:id', (req, res)=>{
  res.render('project', {
    projects : jsonData.projects[req.params.id],
    technologies : jsonData.projects[req.params.id].technologies,
    gitHub : jsonData.projects[req.params.id].github_link,
    projectImages : jsonData.projects[req.params.id].project_page_urls
  });
});
