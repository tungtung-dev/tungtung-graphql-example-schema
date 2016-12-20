import * as graphql from 'graphql';
import postType from '../type';
import {Post} from 'models';

export default {
    type: postType,
    args: {
        _id: {
            type: graphql.GraphQLString
        }
    },
    resolve: async(postRoot, {_id}) => {
        let post = Post.findOne({_id: _id});
        return post;
    }
}