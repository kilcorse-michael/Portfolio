const express = require('express');
const router = express.Router();
const fs = require("fs");
const contents = fs.readFileSync("data.json");
const jsonData = JSON.parse(contents);

router.get('/', (req, res)=>{
  res.render('index', {
    projects : jsonData.projects
  });

});

router.get('/about', (req, res)=>{
  res.render('about');
});


router.get('/:id', (req, res)=>{
  res.render('project', {
    projects : jsonData.projects[req.params.id]
  });
});

module.exports = router;
