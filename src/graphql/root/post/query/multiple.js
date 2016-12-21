import * as graphql from 'graphql';
import {PostType} from 'graphql/constants/types';
import {postDao} from 'dao';
import {createTypeWithPagination} from 'graphql/utils';

export default {
    type: createTypeWithPagination('postTypeDataPagination', PostType),
    args: {
        itemPerPage: {
            type: graphql.GraphQLInt
        },
        page: {
            type: graphql.GraphQLInt
        }
    },
    resolve: async (postsRoot, {itemPerPage = 10, page = 1}) => {
        return postDao.getPosts({}, {itemPerPage, page});
    }
}