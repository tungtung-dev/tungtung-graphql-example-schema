import cors from 'cors';

//FIXES CORS ERROR
var whitelist = [
    'http://localhost:3000',
];

var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

export default cors(corsOptions);