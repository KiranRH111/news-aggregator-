const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
let { users } = require('../dataStore')
const { JWT_SECRET } = require('../config')
const User = require('../models/user.model')

const registerUser = async (userName, password) => {

    if (!userName || !password) {
        throw new Error('Username and password are required.')
    }

    const userExist = users.find(user => user.userName == userName)

    if (userExist) {
        throw new Error('User already exists.')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(users.length + 1, userName, hashedPassword, {
        categories: [],
        keywords: []
    },
        [],
        []);
        
        users.push(user)
    return user;
}


const loginUser = async (username, password) => {
    if (!username || !password) {
        throw new Error('Username and password are required.');
    }

    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error('Invalid credentials.');
    }

    const isMatch = bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Invalid credentials.');
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' })

    return { token }
}


module.exports = { registerUser, loginUser }