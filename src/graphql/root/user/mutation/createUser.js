import * as graphql from 'graphql';
import {userDao} from 'dao';
import {userLoginType} from 'graphql/constants/types/user';

export default {
    type: userLoginType,
    args: {
        username: {
            type: graphql.GraphQLString
        },
        password: {
            type: graphql.GraphQLString
        }
    },
    resolve: (root, params) => userDao.createUser(params)
}