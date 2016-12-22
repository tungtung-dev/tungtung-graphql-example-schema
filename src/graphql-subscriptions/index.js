import {PubSub, SubscriptionManager} from 'graphql-subscriptions';
import schema from 'graphql/schema';
const pubsub = new PubSub();

const subscriptionManager = new SubscriptionManager({
    schema,
    pubsub,
    setupFunctions: {
        // Subscription key connect
        onCreateComment: (options, args) => ({
            // Event publish
            onCreateComment: comment => {
                // Check is chanel postID then publish comment -> client
                return comment.postId === args.postId
            }
        })
    }
})

export {subscriptionManager, pubsub}
export default {subscriptionManager, pubsub}