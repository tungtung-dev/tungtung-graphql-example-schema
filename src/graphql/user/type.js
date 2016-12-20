import * as graphl from 'graphql';

const userType = new graphl.GraphQLObjectType({
    name: "User",
    fields: {
        _id: {
            type: graphl.GraphQLString
        },
        username: {
            type: graphl.GraphQLString
        },
    }
});

const userLoginType = new graphl.GraphQLObjectType({
    name: "UserLoginType",
    fields: {
        success: {
            type: graphl.GraphQLBoolean
        },
        token: {
            type: graphl.GraphQLString
        },
        message: {
            type: graphl.GraphQLString
        },
        user: {
            type: userType
        }
    }
});

export {userLoginType, userType};

export default userType;
