const express = require('express');
const router = express.Router();

const logger = require('../middlewares/logger');

const activityCtrl = require('../controllers/activity');

router.get('/', [logger], activityCtrl.getAllActivities);
router.get('/category/:category', [logger], activityCtrl.getActivitiesByCategory);
router.post('/', [logger], activityCtrl.createActivity);
router.put('/:id', [logger],activityCtrl.modifyActivity);
router.delete('/:id',[logger], activityCtrl.deleteActivity);

module.exports = router;