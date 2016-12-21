import * as graphql from 'graphql';
import {userDao} from 'dao';
import {UserType} from 'graphql/constants/types';

export default {
    type: UserType,
    args: {
        _id: {
            type: graphql.GraphQLString
        },
        token: {
            type: graphql.GraphQLString
        }
    },
    resolve: (userRoot, {_id, token}) => {
        return userDao.getUser({userId: _id, token});
    }
}