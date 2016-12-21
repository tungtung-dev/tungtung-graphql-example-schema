import * as graphql from 'graphql';
import {paginationField} from '../fields';

export default new graphql.GraphQLObjectType({
    name: "PaginationType",
    fields: paginationField
});