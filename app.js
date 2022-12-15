const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

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

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
const dbID = process.env.DB_ID;
const dbPW = process.env.DB_PW;
const DB = `mongodb+srv://${dbID}:${dbPW}@cluster0.izxpz9t.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));


// importation des routes
const baseRoutes = require('./routes/base');
const activityRoutes = require('./routes/activity');

app.use('/', baseRoutes);
app.use('/api/activity', activityRoutes);

module.exports = app;