const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/coffee', proxy({ target: process.env.SERVICE_URL || 'http://localhost:8080/'}));
};
