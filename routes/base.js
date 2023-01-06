const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');


router.get('/', [logger], (req, res)=>res.sendFile('index.html', {root: 'templates'}));
router.get('/create', [logger], (req, res)=>res.sendFile('create.html', {root: 'templates'}));
router.get('/edit/:id', [logger], (req, res)=>res.sendFile('create.html', {root: 'templates'}));
router.get('/category', [logger], (req, res)=>res.sendFile('list.html', {root: 'templates'}));


module.exports = router;