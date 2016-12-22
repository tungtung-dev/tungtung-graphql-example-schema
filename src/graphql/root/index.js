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
    ...User.Mutation,
    ...Comment.Mutation
}

const Subscription = {
    ...Comment.Subscription
}

export {Queries, Mutations, Subscription}
export default {Queries, Mutations, Subscription}