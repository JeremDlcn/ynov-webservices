const logger = require('../utils/logger');

module.exports = (res, req, next) => {
    try {
        logger.info('Logger activé');
        next();
    } catch (error) {
        res.status(501).json({ error: error });
    }
};