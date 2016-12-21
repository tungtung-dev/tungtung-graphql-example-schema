import * as graphql from 'graphql';
import {userField} from '../fields';

export default new graphql.GraphQLInterfaceType({
    name: "UserInterface",
    fields: userField,
    resolveType: (data) => {
        return data;
    }
})