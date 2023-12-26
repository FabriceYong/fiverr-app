import User from '../models/userModels.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register =async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save();
        res.status(201).send('new user has been created successfully')
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user) return res.status(404).json({ message: 'User not found'})

        const isCorrectPassword = bcrypt.compareSync(req.body.password, user.password)

        if(!isCorrectPassword) return res.status(400).json({ message: 'Invalid password or username' })
        
        // create user token
        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
         
        }, process.env.JWT_SECRET)

        // create user cookie with user token
        res.cookie('accessToken', token, { httpOnly: true})

        const { password, ...info } = user._doc
        res.status(200).send(info)

    } catch(err) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}


export const logout = async (req, res) => {
    res.send('this is a logout function')
}