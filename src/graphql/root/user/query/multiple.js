import * as graphql from 'graphql';
import {userDao} from 'dao';
import {UserType} from 'graphql/constants/types';

export default {
    type: new graphql.GraphQLList(UserType),
    resolve: (root, params, req) => {
        return userDao.getUsers()
    }
}