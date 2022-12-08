const express = require('express');
const router = express.Router();

const activityCtrl = require('../controllers/activity');

router.get('/', [], activityCtrl.getAllActivities);
router.get('/:id', [], activityCtrl.getOneActivity);
router.post('/', [], activityCtrl.createActivity);
router.put('/:id', [],activityCtrl.modifyActivity);
router.delete('/:id',[], activityCtrl.deleteActivity);

module.exports = router;