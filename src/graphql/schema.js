import * as graphql from 'graphql';

import Post from './post'
import Comment from './comment'
import User from './user'

var queries = {
    ...Post.Query,
    ...Comment.Query,
    ...User.Query
};

var mutations = {
    ...Post.Mutation,
    ...User.Mutation
}

export default new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: "Query",
        fields: queries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: "Mutation",
        fields: mutations
    })
})