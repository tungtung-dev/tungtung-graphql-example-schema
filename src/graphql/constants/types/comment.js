import * as graphql from 'graphql';
import {userDao} from 'dao';
import {CommentInterface} from '../interfaces';
import UserType from './user';

export default new graphql.GraphQLObjectType({
    name: "CommentType",
    interfaces: [CommentInterface],
    fields: {
        _id: {
            type: graphql.GraphQLString
        },
        content: {
            name: "title",
            type: graphql.GraphQLString
        },
        user: {
            type: UserType,
            resolve:  (commentData) => {
                return userDao.getUser({userId: commentData.userId})
            }
        }
    }
})