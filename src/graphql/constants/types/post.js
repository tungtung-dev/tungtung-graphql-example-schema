import * as graphql from 'graphql';
import {commentDao, userDao} from 'dao';
import {postField} from '../fields';
import commentType from './comment';
import userType from './user';

export default new graphql.GraphQLObjectType({
    name: "postType",
    fields: {
        ...postField,
        comments: {
            type: new graphql.GraphQLList(commentType),
            resolve: (postData) => {
                return commentDao.getCommentsByPost({postId: postData._id})
            }
        },
        user: {
            type: userType,
            resolve: ({userId}) => userDao.getUser({userId})
        }
    }
})