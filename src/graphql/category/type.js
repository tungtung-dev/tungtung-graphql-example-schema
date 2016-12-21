/**
 * Created by Tien Nguyen on 12/21/16.
 */
import * as graphl from "graphql";

export default new graphl.GraphQLObjectType({
    name: "Category",
    fields: {
        _id: {
            type: graphl.GraphQLString
        },
        name: {
            type: graphl.GraphQLString
        },
        slug: {
            type: graphl.GraphQLString
        },
        description: {
            type: graphl.GraphQLString
        },
        content: {
            type: graphl.GraphQLString
        },
        index: {
            type: graphl.GraphQLInt
        },
        icon: {
            type: graphl.GraphQLString
        },
        featuredImage: {
            type: graphl.GraphQLObjectType
        },
        secondaryFeaturedImage: {
            type: graphl.GraphQLObjectType
        },
        customField: {
            type: graphl.GraphQLObjectType
        },
        parentId: {
            type: graphl.GraphQLString
        }
    }
})
