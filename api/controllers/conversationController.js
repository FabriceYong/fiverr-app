import createError from "../config/createError.js"
import Conversation from '../models/conversationModel.js'


export const createConversation = async (req, res, next) => {
    const newConversation = new Conversation({
      id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
      sellerId: req.isSeller ? req.userId : req.body.to,
      buyerId: req.isSeller ? req.body.to : req.userId,
      readBySeller: req.isSeller,
      readByBuyer: !req.isSeller,
    })

  try {
    const savedConversation = await newConversation.save()
    res.status(200).send(savedConversation)
  } catch (error) {
    next(error)
  }
}

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }).sort({ updateAt: -1})

    if(!conversations) return next(createError(403, 'No conversations found'))

    res.status(200).send(conversations)
  } catch (error) {
    next(error)
  }
}

export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({id: req.params.id})

    if(!conversation) return next(createError(404, 'No conversation found'))

    res.status(200).send(conversation)
  } catch (error) {
    next(error)
  }
}

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: {
          // readBySeller: true,
          // readByBuyer: true,
          ...(req.isSeller ? { readBySeller: true } : { readBySeller: true }),
        },
      },
      { new: true }
    )

    res.status(200).send(updatedConversation)
  } catch (error) {
    next(error)
  }
}
