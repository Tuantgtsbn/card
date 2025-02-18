const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');
function routes(app) {
    app.use('/api', apiRoutes);
    app.use('/auth', authRoutes);
}
module.exports = { routes };