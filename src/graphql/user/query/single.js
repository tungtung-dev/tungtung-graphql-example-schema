import * as graphql from 'graphql';
import {userDao} from 'dao';
import userType from '../type';

export default {
    type: userType,
    args: {
        _id: {
            type: graphql.GraphQLString
        }
    },
    resolve: (userRoot, {_id}) => {
        return userDao.getUser({userId: _id});
    }
}