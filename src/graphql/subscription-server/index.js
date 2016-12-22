import {PubSub, SubscriptionManager} from 'graphql-subscriptions';
import schema, {SubscriptionEvent} from '../schema';

const pubsub = new PubSub();

const subscriptionManager = new SubscriptionManager({
    schema,
    pubsub,
    setupFunctions: SubscriptionEvent
})

export {subscriptionManager, pubsub}
export default {subscriptionManager, pubsub}