import createError from '../config/createError.js'
import User from '../models/userModels.js' 
import jwt from 'jsonwebtoken'


export const delete_user = async (req, res) => {
    const user = await User.findById(req.params.id)
    // const token = req.cookies.accessToken
    // if(!token) return res.status(401).json({ message: 'You are not authenticated' })

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if(req.userId.id !== user._id.toString()) {
            return next(createError(403, 'You can only delete an account you created!.'))
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send('Account deleted')
    })
}