import {User} from 'models';
import jwt from 'jsonwebtoken';
import config from 'config';
import bscrypt from 'utils/bcrypt';

export async function getUsers() {
    let userLists = await User.find({});
    return userLists
}

export async function getUser({userId, token}) {
    let user = {};
    if (userId) {
        user = await User.findOne({_id: userId});
    }
    else if (token) {
        user = await getUserByToken({token});
    }
    return user;
}

export function getUserByToken({token}) {
    return new Promise((resolve) => {
        jwt.verify(token, config.JWT_SECRET, (err, payload) => {
            if (!err) {
                User.findOne({_id: payload._doc._id}).then(user => {
                    resolve(user);
                })
            }
            else resolve({})
        });
    })
}

export async function generateToken(user) {
    var token = jwt.sign(user, config.JWT_SECRET, {
        expiresIn: '30days' // expires in 24 hours
    });
    return token;
}

export async function createUser({username, password}) {
    let user = new User({
        username,
        password: bscrypt.generate(password)
    });
    await user.save();
    return {
        success: true,
        token: generateToken(user),
        user
    }
}

export async function loginUser({username, password}) {
    let user = await User.findOne({username});
    if (!user) {
        return {
            success: false,
            message: "Login error"
        }
    }
    if (bscrypt.compare(password, user.password)) {
        return {
            success: true,
            token: generateToken(user),
            user
        };
    }
}

export async function loginUserToken({token}) {
    let user = await getUserByToken({token});
    if (!user) {
        return {
            success: false,
            message: "Login error"
        }
    }
    return {
        success: true,
        token,
        user
    };
}


export default {
    getUsers, getUser, createUser, getUserByToken, loginUser, loginUserToken
}