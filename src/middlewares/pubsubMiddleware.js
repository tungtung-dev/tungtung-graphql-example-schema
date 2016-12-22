export default (pubsub) => (req, res, next) => {
    req.pubsub = pubsub;
    next();
}