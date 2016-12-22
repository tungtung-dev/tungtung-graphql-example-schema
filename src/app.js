import express from 'express';
import mongoose from 'mongoose';
import {createServer} from 'http';
import {SubscriptionServer} from 'subscriptions-transport-ws';
import graphQLMiddleware from './graphql/middleware';
import {subscriptionManager, pubsub} from './graphql/subscription-server';
import {authMiddleware, accessMiddleware, corsMiddleware, pubsubMiddleware} from './middlewares';
import config from './config';
import seeder from './seeder';


const databasePath = process.env.NODE_HEROKU ? config.HEROKU_DATABASE : config.DATABASE
mongoose.connect(databasePath);

var app = express();

/**
 * Setup basic middleware
 * Require: accessMiddleware | corsMiddleware | authMiddleware
 */
app.use(accessMiddleware);
app.use(corsMiddleware);
app.use(authMiddleware);
app.use(pubsubMiddleware(pubsub))

app.get('/', (req, res) => {
    res.json({msg: 'Welcome GraphQL Demo, please access to https://tungtung-apollo.herokuapp.com'});
})

app.use('/seeder', seeder);
app.use('/graphql', graphQLMiddleware)

/**
 * Create Websocket Server
 */
var webSocketWithApp = createServer(app);

// socketApp.listen(8081, () => console.log( // eslint-disable-line no-console
//     `Websocket Server is now running on http://localhost:8081`
// ));
var port = process.env.PORT || config.PORT_START;
webSocketWithApp.listen(port, () => {
    console.log('Listen at port ' + port);
    console.log('Socket at port ' + port);
})

/**
 * Connect server with GraphQL Schema
 */
const socketServer = new SubscriptionServer({
    subscriptionManager,
    onSubscribe: (msg, params) => {
        return Object.assign({}, params, {});
    }
}, webSocketWithApp);