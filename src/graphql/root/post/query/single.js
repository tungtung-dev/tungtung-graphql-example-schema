import * as graphql from 'graphql';
import {PostType} from 'graphql/constants/types';
import {postDao} from 'dao';

export default {
    type: PostType,
    args: {
        _id: {
            type: graphql.GraphQLString
        },
        title: {
            type: graphql.GraphQLString
        }
    },
    resolve: (postRoot, {_id}) => {
        return postDao.getPost({_id});
    }
}