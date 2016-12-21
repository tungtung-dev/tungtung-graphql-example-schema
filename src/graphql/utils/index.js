import * as graphql from 'graphql';
import {PaginationType} from '../constants/types';

export function createTypeWithPagination(typeName = '', DataType) {
    return new graphql.GraphQLObjectType({
        name: typeName,
        fields: {
            data: {
                type: new graphql.GraphQLList(DataType)
            },
            pagination: {
                type: PaginationType
            }
        }
    })
}

export default {createTypeWithPagination}