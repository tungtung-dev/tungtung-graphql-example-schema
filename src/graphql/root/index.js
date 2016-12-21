import Comment from './comment';
import Post from './post';
import User from './user';

const Queries = {
    ...Post.Query,
    ...Comment.Query,
    ...User.Query
}

const Mutations = {
    ...Post.Mutation,
    ...User.Mutation
}

export {Queries, Mutations}
export default {Queries, Mutations}