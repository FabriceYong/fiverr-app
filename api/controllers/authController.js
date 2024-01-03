import User from '../models/userModels.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import createError from '../config/createError.js'

export const register =async (req, res, next) => {
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
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        
        if(!user) return next(createError(404, 'User not found'))

        const isCorrectPassword = bcrypt.compareSync(req.body.password, user.password)

        if(!isCorrectPassword) return next(createError(400, 'Invalid credentials'))
        
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
        next(err)
    }
}



export const logout = async (req, res) => {
    res.clearCookie('accessToken', { sameSite: 'none', secure: true }).status(200).send('User has logged out.')
}
