
exports.getAllActivities = (req, res) => {
    res.status(200).json({message: 'Liste des activités'});
}

exports.getOneActivity = (req, res) => {
    res.status(200).json({message: 'Activité'});
}

exports.createActivity = (req, res) => {
    res.status(200).json({message: 'Activité créée'});
}

exports.modifyActivity = (req, res) => {
    res.status(200).json({message: 'Activité modifiée'});
}

exports.deleteActivity = (req, res) => {
    res.status(200).json({message: 'Activité supprimée'});
}
