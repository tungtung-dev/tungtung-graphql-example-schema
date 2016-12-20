import {userDao} from 'dao';

function getTokenFromAuthorization(req) {
    var token = req.headers['authorization'] || req.headers['x-access-token'] || req.query.token;
    if (token) {
        return token.substr(4, token.length);
    }
    return '';
}

export default (req, res, next) => {
    var token = getTokenFromAuthorization(req);
    if (token) {
        userDao.loginUserToken(token, (user) => {
            req.user = user;
            next();
        })
    }
    else {
        req.user = {};
        next();
    }
}