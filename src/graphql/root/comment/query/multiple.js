import * as graphql from 'graphql';
import {commentDao} from 'dao';
import {commentType} from 'graphql/constants/types';

export default {
    type: new graphql.GraphQLList(commentType),
    args: {
        postId: {
            type: graphql.GraphQLString
        }
    },
    resolve: (commentRoot, {postId}) => {
        return commentDao.getCommentsByPost({postId});
    }
}