import * as graphql from 'graphql';

import {Queries, Mutations, Subscription} from './root';

export default new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: "Query",
        fields: Queries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: "Mutation",
        fields: Mutations
    }),
    subscription: new graphql.GraphQLObjectType({
        name: "Subscription",
        fields: Subscription
    })
})