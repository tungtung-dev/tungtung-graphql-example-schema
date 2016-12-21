import * as graphql from 'graphql';

import {Queries, Mutations} from './root';

export default new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: "Query",
        fields: Queries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: "Mutation",
        fields: Mutations
    })
})