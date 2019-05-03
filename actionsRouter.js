const express = require('express');
const db = require('./api/api');

const router = express.Router();

router.post('/', (req,res) => {
    db.addProject(req.body)
    .then(newAction => {
        res.status(200).send(newAction);
    })
});

router.get('/:id', (req,res) => {
    db.getAction(req.params.id)
    .then(action => {
        res.status(200).send(action);
    });
});

module.exports = router;