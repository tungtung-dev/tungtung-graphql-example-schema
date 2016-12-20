import * as graphql from 'graphql';
import userType from '../type';
import {User} from 'models';

export default {
    type: userType,
    args: {
        _id: {
            type: graphql.GraphQLString
        }
    },
    resolve: async(userRoot, {_id}) => {
        let user = User.findOne({_id: _id});
        return user;
    }
}