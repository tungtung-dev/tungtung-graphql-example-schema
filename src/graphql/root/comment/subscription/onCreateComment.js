import * as graphql from 'graphql'
import {CommentType} from 'graphql/constants/types';

export default  {
    type: CommentType,
    args: {
        postId: {
            type: graphql.GraphQLID
        }
    },
    resolve: (comment) => {
        return comment
    }
}