import * as graphql from 'graphql';
import userType from '../type';
import {User} from 'models';

export default {
    type: new graphql.GraphQLList(userType),
    resolve: async () => {
        let userLists = User.find({});
        return userLists;
    }
}