var jwt = require('jwt-simple'),
    url = require('url'),
    SECRET = require('../../credentials/jwtSecret.json').secret;

module.exports = function(req, res, next) {
    var token = (req.body && req.body.access_token)
        || (req.query && req.query.access_token)
        || req.headers['x-access-token'];

    if (token) {
        try {
            var decoded = jwt.decode(token, SECRET);
            // handle token here
            if (decoded.exp <= Date.now()) {
                res.end('Access token has expired', 400);
            }
            //check if user is admin
            if (decoded.admin) {
                req.isAdmin = true;
            }
            next();
        } catch (err) {
            console.error(err);
            res.end('Invalid token', 401);
        }
    } else {
        console.error("jwtAuth | error: no access token in request");
        res.status(401).send('Invalid token');
    }
}