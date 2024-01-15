import createError from "../config/createError.js"
import Gig from '../models/gigModel.js'
import Order from '../models/orderModel.js'

export const createOrder = async (req, res, next) => {

    try {
        const gig = await Gig.findById(req.params.gigId) 

        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: 'temporary'
        })

        const savedOrder = await newOrder.save()
        res.status(200).send('successful')
    } catch (error) {
        next(err)
    }
}

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),isCompleted: true
        })

        if(!orders) return next(createError(404, 'Sorry!, no orders were found.'))

        res.status(200).send(orders)
    } catch (error) {
        next(error)
    }
}