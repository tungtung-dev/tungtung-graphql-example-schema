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
        type: mongoose.Schema.ObjectId
    }
});

export default mongoose.model('post', blogPostSchema);
