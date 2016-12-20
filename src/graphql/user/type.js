import * as graphl from 'graphql';

export default new graphl.GraphQLObjectType({
    name: "User",
    fields: {
        _id: {
            type: graphl.GraphQLString
        },
        username: {
            type: graphl.GraphQLString
        },
    }
})
