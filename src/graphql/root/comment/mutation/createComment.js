import * as graphql from 'graphql';
import {CommentType} from 'graphql/constants/types';
import {commentDao} from 'dao';

export default {
    type: CommentType,
    args: {
        content: {
            type: graphql.GraphQLString
        },
        postId: {
            type: graphql.GraphQLString
        }
    },
    resolve: (commentRoot, params, {user}) => {
        return commentDao.createComment({
            ...params,
            userId: user._id
        })
    }
}