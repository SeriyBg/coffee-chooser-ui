const proxy = require('http-proxy-middleware');

const service_url = process.env.SERVICE_URL || 'http://localhost:8080/';

module.exports = function(app) {
    app.use('/coffee', proxy({ target: service_url}));
};
