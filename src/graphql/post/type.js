import * as graphl from 'graphql';
import commentType from '../comment/type';
import userType from '../user/type';
import {Comment, User} from 'models';

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
            resolve: async (post) => {
                let commentLists  = await Comment.find({postId: post._id});
                return commentLists;
            }
        },
        user: {
            type: userType,
            resolve: async (post) => {
                console.log(post);
                let user = await User.findOne({_id: post.userId});
                return user;
            }
        }
    }
})
