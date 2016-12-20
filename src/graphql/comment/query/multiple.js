import * as graphql from 'graphql';
import {commentDao} from 'dao';
import commnentType from '../type';

export default {
    type: new graphql.GraphQLList(commnentType),
    args: {
        postId: {
            type: graphql.GraphQLString
        }
    },
    resolve: (commentRoot, {postId}) => {
        return commentDao.getCommentsByPost({postId});
    }
}