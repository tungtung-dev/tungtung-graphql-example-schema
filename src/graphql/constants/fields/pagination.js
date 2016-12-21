import * as graphql from 'graphql';

export default  {
    itemPerPage: {
        type: graphql.GraphQLInt
    },
    page: {
        type: graphql.GraphQLInt
    },
    totalItem: {
        type: graphql.GraphQLInt
    }
}