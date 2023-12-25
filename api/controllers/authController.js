import User from '../models/userModels.js'

export const login = async (req, res) => {
    res.send('this is a login function')
}

export const register =async (req, res) => {
    try {
        const newUser = new User(req.body)

        await newUser.save();
        res.status(201).send('new user has been created successfully')
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' })
    }

}

export const logout = async (req, res) => {
    res.send('this is a logout function')
}