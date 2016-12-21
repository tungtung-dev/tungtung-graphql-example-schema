import * as graphql from 'graphql';
import {postField} from '../fields';
import {UserInterface, PostInterface} from '../interfaces';
import {postDao} from 'dao';

const UserType = new graphql.GraphQLObjectType({
    name: "UserType",
    interfaces: [UserInterface],
    fields: {
        _id: {
            type: graphql.GraphQLString
        },
        username: {
            type: graphql.GraphQLString
        },
        posts: {
            type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
                name: "PostTypeForUser",
                interfaces: [PostInterface],
                fields: postField
            })),
            resolve: ({_id}) => {
                return postDao.getPostsByUser({userId: _id});
            }
        }
    }
});

const userLoginType = new graphql.GraphQLObjectType({
    name: "UserTypeLogin",
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
            type: UserType
        }
    }
});

export {userLoginType, UserType};

export default UserType;
