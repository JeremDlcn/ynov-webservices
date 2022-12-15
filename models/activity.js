const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {          
        type: String,
        required: false
    },
    schedule: {
        type: String,
        required: true
    },
    coords: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    prices: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Activity', activitySchema);