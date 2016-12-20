import * as graphql from 'graphql';
import commentType from '../type';
import {Comment} from 'models';

export default {
    type: commentType,
    args: {
        _id: {
            type: graphql.GraphQLString
        }
    },
    resolve: async(commentRoot, {_id}) => {
        let comment = Comment.findOne({_id: _id});
        return comment;
    }
}