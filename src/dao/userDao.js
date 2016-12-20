import {User} from 'models';

export async function getUsers() {
    let userLists = await User.find({});
    return userLists
}

export async function getUser({userId}){
    let user = await User.findOne({_id: userId});
    return user;
}

export default {
    getUsers, getUser
}