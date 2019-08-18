const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/coffee', proxy({ target: process.env.TRACKER_URL || 'http://localhost:8080/'}));
};
