import * as graphql from 'graphql';
import postType from '../type';
import {postDao} from 'dao';

export default {
    type: postType,
    args: {
        _id: {
            type: graphql.GraphQLString
        }
    },
    resolve: (postRoot, params) => {
        return postDao.getPost(params);
    }
}