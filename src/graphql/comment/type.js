import * as graphl from 'graphql';
import userType from '../user/type';
import {User} from 'models';

export default new graphl.GraphQLObjectType({
    name: "Comment",
    fields: {
        _id: {
            type: graphl.GraphQLString
        },
        content: {
            name: "title",
            type: graphl.GraphQLString
        },
        user: {
            type: userType,
            resolve: async (comment) => {
                let user = await User.findOne({_id: comment.userId});
                return user;
            }
        }
    }
})
