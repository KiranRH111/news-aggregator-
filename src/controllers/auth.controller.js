const authService = require('../services/auth.service')

const register = async (req, res) => {
    try{
        const {username, password} = req.body
        console.log('here');
        const result = await authService.registerUser(username,password)
        res.status(201).json(result)
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}


const login = async (req, res) => {
    try{
        const {username, password} = req.body
        const result = await authService.loginUser(username,password)
        res.status(201).json(result)
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}


module.exports = {register, login}