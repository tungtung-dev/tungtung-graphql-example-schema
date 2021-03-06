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

const SubscriptionEvent = {
    ...Comment.SubscriptionEvent
}

export {Queries, Mutations, Subscription, SubscriptionEvent}
export default {Queries, Mutations, Subscription, SubscriptionEvent}