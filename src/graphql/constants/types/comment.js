import * as graphql from 'graphql';
import {userDao} from 'dao';
import userType from './user';

export default new graphql.GraphQLObjectType({
    name: "commentType",
    fields: {
        _id: {
            type: graphql.GraphQLString
        },
        content: {
            name: "title",
            type: graphql.GraphQLString
        },
        user: {
            type: userType,
            resolve:  (commentData) => {
                return userDao.getUser({userId: commentData.userId})
            }
        }
    }
})