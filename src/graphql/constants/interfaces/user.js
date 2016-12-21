import * as graphql from 'graphql';
import {userField} from '../fields';

export default new graphql.GraphQLInterfaceType({
    name: "postInterface",
    fields: userField,
    fieldType: (data) => {
        return data;
    }
})