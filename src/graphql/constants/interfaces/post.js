import * as graphql from 'graphql';
import {postField} from '../fields';

export default new graphql.GraphQLInterfaceType({
    name: "PostInterface",
    fields: postField,
    resolveType: (data) => {
        return data;
    }
})