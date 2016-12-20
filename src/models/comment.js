import mongoose from 'mongoose';

var blogPostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    postId: {
        type: mongoose.Schema.ObjectId,
        ref: "post"
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
});

export default mongoose.model('comment', blogPostSchema);
