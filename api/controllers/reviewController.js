import createError from "../config/createError.js"
import Review from '../models/reviewModel.js'
import Gig from '../models/gigModel.js'

export const createReview = async (req, res, next) => {

    if(req.isSeller) return next(createError(403, "Sellers can't create a review"))

    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        stars: req.body.stars
    })

    try {
        const review = await Review.findOne({ gigId: req.body.gigId, userId: req.userId})

        if(review) return next(createError(403, "You've already made a review on this gig"))

        const savedReview = await newReview.save()

        await Gig.findByIdAndUpdate(req.body.gigId, { $inc: { totalStars: req.body.stars, starNumber: 1 }}) // update the number of stars

        res.status(200).send(savedReview)
        
    } catch(err) {
        next(err)
    }
}

export const getReviews = async (req, res, next) => {
    const reviews = await Review.find({ gigId: req.params.gigId })

    res.status(200).send(reviews)
}

export const deleteReview = (req, res, next) => {
    res.send('review deleted')
}
