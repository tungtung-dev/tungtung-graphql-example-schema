import * as graphql from 'graphql';
import {commentDao} from 'dao';
import {CommentType} from 'graphql/constants/types';

export default {
    type: CommentType,
    args: {
        _id: {
            type: graphql.GraphQLString
        }
    },
    resolve: async(commentRoot, {_id}) => {
        return commentDao.getComment({_id});
    }
}