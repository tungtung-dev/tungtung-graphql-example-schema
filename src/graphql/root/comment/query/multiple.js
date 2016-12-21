import * as graphql from 'graphql';
import {commentDao} from 'dao';
import {CommentType} from 'graphql/constants/types';

export default {
    type: new graphql.GraphQLList(CommentType),
    args: {
        postId: {
            type: graphql.GraphQLString
        }
    },
    resolve: (commentRoot, {postId}) => {
        return commentDao.getCommentsByPost({postId});
    }
}