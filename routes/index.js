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
    projects : jsonData.projects[req.params.id],
    technologies : jsonData.projects[req.params.id].technologies,
    gitHub : jsonData.projects[req.params.id].github_link,
    projectImages : jsonData.projects[req.params.id].project_page_urls,
    liveLink : jsonData.projects[req.params.id].live_link
  });
});

module.exports = router;
