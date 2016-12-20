import * as graphl from 'graphql';
import {userDao} from 'dao';
import userType from '../user/type';

export default new graphl.GraphQLObjectType({
    name: "Comment",
    fields: {
        _id: {
            type: graphl.GraphQLString
        },
        content: {
            name: "title",
            type: graphl.GraphQLString
        },
        user: {
            type: userType,
            resolve: async ({userId}) => userDao.getUser({userId})
        }
    }
})
