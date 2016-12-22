import * as graphql from 'graphql';
import {postDao} from 'dao';
import {PostType} from 'graphql/constants/types';

export default {
    type: PostType,
    args: {
        _id: {
            type: graphql.GraphQLID
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
    },
    resolve: (root, params) => {
        return postDao.updatePost(params)
    }
}