const activitySchema = new Schema({
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
    prices: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
});