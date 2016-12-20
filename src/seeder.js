import {Post, Comment, User} from './models';
import casual from 'casual';

async function addUsers() {
    var users = [];
    for (let i = 1; i <= 5; i++) {
        let user = new User({
            username: casual.username
        });
        user = await user.save();
        users.push(user);
    }
    return users;
}

async function addPosts(userId) {
    var posts = [];
    for (var i = 1; i <= 10; i++) {
        let post = new Post();
        post.title = casual.title;
        post.description = casual.description;
        post.content = casual.text;
        post.userId = userId;
        await post.save();
        posts.push(post);
    }
    return posts;
}

async function addComments(postId, userId) {
    var comments = [];
    for (var i = 1; i <= 10; i++) {
        let comment = new Comment();
        comment.content = casual.description;
        comment.postId = postId;
        comment.userId = userId;
        await comment.save();
        comments.push(comment);
    }
    return comments;
}

export default async (req, res) => {
    try{
        await User.remove();
        await Comment.remove();
        await Post.remove();
        var users = await addUsers();
        for(let userIndex = 0; userIndex < users.length; userIndex++){
            console.log(users[userIndex]._id);
            let posts = await addPosts(users[userIndex]._id);
            for(let postIndex = 0; postIndex < posts.length; postIndex++){
                let comments = await addComments(posts[postIndex]._id, users[userIndex]._id);
            }
        }
        res.json(users);
    }
    catch (e) {
        console.log(e);
        res.json({error: true});
    }

}