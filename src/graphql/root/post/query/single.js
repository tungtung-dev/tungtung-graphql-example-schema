import * as graphql from 'graphql';
import {postType} from 'graphql/constants/types';
import {postDao} from 'dao';

export default {
    type: postType,
    args: {
        _id: {
            type: graphql.GraphQLString
        },
        title: {
            type: graphql.GraphQLString
        }
    },
    resolve: (postRoot, {_id}, req) => {
        return postDao.getPost({_id});
    }
}