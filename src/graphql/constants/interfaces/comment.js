import * as graphql from 'graphql';
import {commentField} from '../fields';

export default new graphql.GraphQLInterfaceType({
    name: "postInterface",
    fields: commentField,
    fieldType: (data) => {
        return data;
    }
})