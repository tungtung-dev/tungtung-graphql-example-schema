import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import seeder from './seeder';
import graphQLMiddleware from './graphql/middleware';
import {authMiddleware} from './middlewares';

mongoose.connect(config.DATABASE);

var app = express();

app.get('/', (req, res) => {
    res.json({msg: 'Welcome GraphQL Demo'});
})
app.use('/seeder', seeder);

app.use('/graphql', authMiddleware, graphQLMiddleware)

app.listen(config.PORT_START, () => {
    console.log('listening at port ' + config.PORT_START);
})