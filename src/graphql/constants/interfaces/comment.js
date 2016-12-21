import * as graphql from 'graphql';
import {commentField} from '../fields';

export default new graphql.GraphQLInterfaceType({
    name: "CommentInterface",
    fields: commentField,
    resolveType: (data) => {
        return data;
    }
})