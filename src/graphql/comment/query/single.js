import * as graphql from 'graphql';
import {commentDao} from 'dao';
import commentType from '../type';

export default {
    type: commentType,
    args: {
        _id: {
            type: graphql.GraphQLString
        }
    },
    resolve: async(commentRoot, {_id}) => {
        return commentDao.getComment({_id});
    }
}