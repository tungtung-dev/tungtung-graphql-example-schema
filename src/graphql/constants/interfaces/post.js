import * as graphql from 'graphql';
import {postField} from '../fields';

export default new graphql.GraphQLInterfaceType({
    name: "postInterface",
    fields: postField,
    fieldType: (data) => {
        return data;
    }
})