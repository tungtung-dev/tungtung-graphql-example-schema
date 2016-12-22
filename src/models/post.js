import mongoose from 'mongoose';

var blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    content: {
        type: Object
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
});

blogPostSchema.virtual('user').get(() => {
    return this._id;
});

blogPostSchema.set('toJson', {virtuals: true});

export default mongoose.model('post', blogPostSchema);
