const express = require('express');

const app = express();

// Passby CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, UserID, Email');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// static files
app.use(express.static(__dirname + '/public'));

// importation des routes
const baseRoutes = require('./routes/base');
const activityRoutes = require('./routes/activity');

app.use('/', baseRoutes);
app.use('/api/activity', activityRoutes);

module.exports = app;