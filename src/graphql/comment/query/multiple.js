import * as graphql from 'graphql';
import commnentType from '../type';
import {Comment} from 'models';

export default {
    type: new graphql.GraphQLList(commnentType),
    args: {
        postId: {
            type: graphql.GraphQLString
        }
    },
    resolve: async (commentRoot, {postId}) => {
        let commentLists = Comment.find({postId});
        return commentLists;
    }
}