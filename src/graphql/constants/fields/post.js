import * as graphql from 'graphql';

export default {
    _id: {
        type: graphql.GraphQLString
    },
    title: {
        type: graphql.GraphQLString
    },
    description: {
        type: graphql.GraphQLString
    },
    content: {
        type: graphql.GraphQLString
    }
}