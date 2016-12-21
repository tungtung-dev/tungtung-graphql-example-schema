import * as graphql from 'graphql';
import {commentDao, userDao} from 'dao';
import {postField} from '../fields';
import {PostInterface} from '../interfaces';
import CommentType from './comment';
import UserType from './user';

export default new graphql.GraphQLObjectType({
    name: "PostType",
    interfaces: [PostInterface],
    fields: {
        ...postField,
        comments: {
            type: new graphql.GraphQLList(CommentType),
            resolve: (postData) => {
                return commentDao.getCommentsByPost({postId: postData._id})
            }
        },
        user: {
            type: UserType,
            resolve: ({userId}) => userDao.getUser({userId})
        }
    }
})