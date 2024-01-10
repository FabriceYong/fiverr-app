import createError from '../config/createError.js'
import Gig from '../models/gigModel.js'

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, 'Only sellers are allowed to create a gig!'))

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  })

  try {
    const saveGig = await newGig.save()
    res.status(201).json(saveGig)
  } catch (err) {
    next(err)
  }
}

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id)

    if (gig.userId !== req.userId)
      return next(createError(403, 'You can delete only your own gig!'))

    await Gig.findByIdAndDelete(req.params.id)
    res.status(200).send('Gid has been deleted!')
  } catch (err) {
    next(err)
  }
}

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id)

    if(!gig) return next(createError(404, 'Sorry!, Gig not found.'))
    
    res.status(200).send(gig)
    
} catch (err) {
    console.log(err)
}
}

export const getGigs = async (req, res, next) => {

    const q = req.query

    const filters = {
        ...(q.userId && { userId: q.userId }), // filter or query by userId

        ...(q.category && {category: q.category}), // check if there's a category option in the query request before making the request

        ...((q.min || q.max) && { price: { ...(q.min && {$gt: q.min}), ...(q.max && {$lt: q.max})}}), // find all gigs with prices greater than 100

        ...(q.search && {title: {$regex: q.search, $options: 'i'}}) // find a gig with this specific title & not case sensitive using the search
    }

    try {
        const gigs = await Gig.find(filters)
        
        if(!gigs) return next(createError(404, 'Sorry, No Gigs were found!.'))

        res.status(200).send(gigs)
    } catch(err) {
        console.log(err)
    }
}