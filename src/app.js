import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config';
import seeder from './seeder';
import graphQLMiddleware from './graphql/middleware';
import {authMiddleware} from './middlewares';
import "test-import";

mongoose.connect(config.DATABASE);

var app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Cache-Control, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.json({msg: 'Welcome GraphQL Demo'});
});

app.use('/seeder', seeder);

//FIXES CORS ERROR
var whiteList = [
    'http://localhost:3000'
];
var corsOptions = {
    origin: (origin, callback) => {
        var originIsWhiteListed = whiteList.indexOf(origin) !== -1;
        callback(null, originIsWhiteListed);
    },
    credentials: true
};

app.use(cors(corsOptions));


app.use('/graphql', authMiddleware, graphQLMiddleware);

app.listen(config.PORT_START, () => {
    console.log('listening at port ' + config.PORT_START);
});