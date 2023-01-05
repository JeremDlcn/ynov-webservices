const express = require('express');
const router = express.Router();


router.get('/', [], (req, res)=>res.sendFile('index.html', {root: 'templates'}));
router.get('/create', [], (req, res)=>res.sendFile('create.html', {root: 'templates'}));
router.get('/category', [], (req, res)=>res.sendFile('list.html', {root: 'templates'}));


module.exports = router;