import * as graphql from 'graphql';
import postType from '../type';
import {postDao} from 'dao';

export default {
    type: new graphql.GraphQLList(postType),
    resolve: () => {
        return postDao.getPosts();
    }
}