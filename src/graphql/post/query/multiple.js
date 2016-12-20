import * as graphql from 'graphql';
import postType from '../type';
import {Post} from 'models';

export default {
    type: new graphql.GraphQLList(postType),
    resolve: async () => {
        let postsLists = Post.find({});
        return postsLists;
    }
}