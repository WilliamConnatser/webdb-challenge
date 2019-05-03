const express = require('express');
const db = require('./api/api');

const router = express.Router();

router.post('/', (req,res) => {
    db.addProject(req.body)
    .then(newProject => {
        res.status(200).send(newProject);
    })
});

router.get('/:id', (req,res) => {
    db.getProject(req.params.id)
    .then(project => {
        res.status(200).send(project);
    });
});

module.exports = router;