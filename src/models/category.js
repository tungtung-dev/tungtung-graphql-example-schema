/**
 * Created by Tien Nguyen on 9/30/16.
 */

import mongoose from "mongoose";

var {Schema} = mongoose;

var categorySchema = new Schema({
    name: {
        type: String, require: true
    },
    slug: {
        type: String, require: true
    },
    index: {
        type: Number
    },
    icon: {
        type: String
    },
    featuredImage: {},
    secondaryFeaturedImage: {},
    customField: {},
    parentId: {
        type: Schema.ObjectId, ref: 'category'
    },
    createdAt: {
        type: Date, default: Date.now
    },
    updatedAt: {
        type: Date, default: Date.now
    }
});

categorySchema.virtual('id').get(function () {
    return this._id;
});

categorySchema.set('toJSON', {virtuals: true});

export default mongoose.model('category', categorySchema);
