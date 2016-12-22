import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http';
import {SubscriptionServer} from 'subscriptions-transport-ws';
import config from './config';
import seeder from './seeder';
import graphQLMiddleware from './graphql/middleware';
import {subscriptionManager, pubsub} from './graphql-subscriptions';
import {authMiddleware} from './middlewares';
import "test-import";

mongoose.connect(config.DATABASE);


var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Cache-Control, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.json({msg: 'Welcome GraphQL Demo'});
})
app.use('/seeder', seeder);

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
app.use(cors(corsOptions));


// app.post('/graphql', (req, res) => {
//     res.json({ok: true});
// })
app.use((req, res, next) => {
    req.pubsub = pubsub;
    next();
})
app.use('/graphql', authMiddleware, graphQLMiddleware)

app.listen(config.PORT_START, () => {
    console.log('listening at port ' + config.PORT_START);
})

var socketApp = createServer((req, res) => {
    res.writeHead(404);
    res.end();
});

socketApp.listen(8081, () => console.log( // eslint-disable-line no-console
    `Websocket Server is now running on http://localhost:8081`
));

const socketServer = new SubscriptionServer({
    subscriptionManager,
    onSubscribe: (msg, params) => {
        return Object.assign({}, params, {
            pubsub
        });
    },
}, socketApp);