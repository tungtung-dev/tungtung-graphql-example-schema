import * as graphql from 'graphql';
import {postField} from '../fields';
import {postDao} from 'dao';

const userType = new graphql.GraphQLObjectType({
    name: "userType",
    fields: {
        _id: {
            type: graphql.GraphQLString
        },
        username: {
            type: graphql.GraphQLString
        },
        posts: {
            type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
                name: "postTypeForUser",
                fields: postField
            })),
            resolve: ({_id}) => {
                return postDao.getPostsByUser({userId: _id});
            }
        }
    }
});

const userLoginType = new graphql.GraphQLObjectType({
    name: "userTypeLogin",
    fields: {
        success: {
            type: graphql.GraphQLBoolean
        },
        token: {
            type: graphql.GraphQLString
        },
        message: {
            type: graphql.GraphQLString
        },
        user: {
            type: userType
        }
    }
});

export {userLoginType, userType};

export default userType;
