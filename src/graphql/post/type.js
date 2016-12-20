import * as graphl from 'graphql';
import {userDao, commentDao} from 'dao';
import commentType from '../comment/type';
import userType from '../user/type';

export default new graphl.GraphQLObjectType({
    name: "Post",
    fields: {
        _id: {
            type: graphl.GraphQLString
        },
        title: {
            type: graphl.GraphQLString
        },
        description: {
            type: graphl.GraphQLString
        },
        content: {
            type: graphl.GraphQLString
        },
        comments: {
            type: new graphl.GraphQLList(commentType),
            resolve: ({_id}) => commentDao.getCommentsByPost({postId: _id})
        },
        user: {
            type: userType,
            resolve: ({userId}) => userDao.getUser({userId})
        }
    }
})
