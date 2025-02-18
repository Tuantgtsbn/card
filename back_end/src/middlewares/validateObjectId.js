const mongoose = require('mongoose');
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id || req.query.id || req.body.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid ObjectId'
        });
    }
    next();
}
module.exports = validateObjectId;