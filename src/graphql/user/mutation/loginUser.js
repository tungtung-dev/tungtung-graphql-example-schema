import * as graphql from 'graphql';
import {userDao} from 'dao';
import {userLoginType} from '../type';

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
    resolve: (root, params) => userDao.loginUser(params)
}