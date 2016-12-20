import * as graphql from 'graphql';
import {userDao} from 'dao';
import userType from '../type';

export default {
    type: new graphql.GraphQLList(userType),
    resolve: (root, params, req) => {
        return userDao.getUsers()
    }
}