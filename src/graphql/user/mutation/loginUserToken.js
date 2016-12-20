import * as graphql from 'graphql';
import {userDao} from 'dao';
import {userLoginType} from '../type';

export default {
    type: userLoginType,
    args: {
        token: {
            type: graphql.GraphQLString
        }
    },
    resolve: (root, params) => userDao.loginUserToken(params)
}