import User from '../models/userModels.js' 
import jwt from 'jsonwebtoken'


export const delete_user = async (req, res) => {
    const token = req.cookies.accessToken
    const user = await User.findById(req.params.id)

    if(!token) return res.status(401).json({ message: 'You are not authenticated' })

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if(err) throw err
        if(payload.id !== user._id.toString()) {
            return res.status(403).json({ message: 'You can only delete an account you created' })
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Account deleted' })
    })
}