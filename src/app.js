import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import seeder from './seeder';
import graphQLMiddleware from './graphql/middleware';

mongoose.connect('mongodb://localhost/tungtung-graphql');

var app = express();

app.get('/', (req, res) => {
    res.json({msg: 'Welcome GraphQL Demo'});
})
app.use('/seeder', seeder);

app.use('/graphql', graphQLMiddleware)

app.listen(config.PORT_START, () => {
    console.log('listening at port ' + config.PORT_START);
})