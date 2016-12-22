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
    resolve: async (commentRoot, params, {user, pubsub}) => {
        const comment = await commentDao.createComment({
            ...params,
            userId: user._id
        });
        if(pubsub){
            pubsub.publish('onCreateComment' ,comment);
        }
        return comment;
    }
}