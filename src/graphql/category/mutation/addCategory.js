import * as graphql from "graphql";
import categoryType from "../type";
import {createCategory} from "../../../dao/categoryDao";

export default {
    type: categoryType,
    args: {
        name: {
            type: graphql.GraphQLString
        },
        index: {
            type: graphql.GraphQLString
        },
        icon: {
            type: graphql.GraphQLString
        },
        featuredImage: {
            type: graphql.GraphQLObjectType
        },
        secondaryFeaturedImage: {
            type: graphql.GraphQLObjectType
        },
        customField: {
            type: graphql.GraphQLObjectType
        },
        parentId: {
            type: graphql.GraphQLString
        }
    },
    resolve: (root, params) => {
        return createCategory(params)
    }
}