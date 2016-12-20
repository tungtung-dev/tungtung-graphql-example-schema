import expressGraphql from 'express-graphql';
import schema from './schema';

export default expressGraphql(() => ({
    schema,
    pretty: true,
    graphiql: true
}))