import * as graphql from 'graphql';
import {userDao} from 'dao';
import {userType} from 'graphql/constants/types';

export default {
    type: new graphql.GraphQLList(userType),
    resolve: (root, params, req) => {
        return userDao.getUsers()
    }
}