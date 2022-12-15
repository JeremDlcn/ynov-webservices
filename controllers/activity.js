const Activity = require('../models/Activity');

exports.getAllActivities = (req, res, next) => {
    Activity.find()
        .then(activities => res.status(200).json(activities))
        .catch(error => res.status(400).json({ error }));
}

exports.getOneActivity = (req, res, next) => {
    Activity.findOne({ _id: req.params.id })
        .then(activity => res.status(200).json(activity))
        .catch(error => res.status(404).json({ error }));
}

exports.createActivity = (req, res, next) => {
    console.log(req.body);
    Activity.create({
        name: req.body.name,
        description: req.body.description,
        schedule: req.body.schedule,
        coords: req.body.coords,
        category: req.body.category,
        prices: req.body.prices,
        icon: req.body.icon
    })
    .then(() => res.status(201).json({message: 'Activité créée'}))
    .catch(error => res.status(400).json({ error }));
}

exports.modifyActivity = (req, res) => {
    Activity.updateOne({ _id: req.params.id },
    {
        name: req.body.name,
        description: req.body.description,
        schedule: req.body.schedule,
        coords: req.body.coords,
        category: req.body.category,
        prices: req.body.prices,
        icon: req.body.icon
    })  
}

exports.deleteActivity = (req, res) => {
    Activity.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({message: 'Activité supprimée'}))
    .catch(error => res.status(400).json({ error }));
}
