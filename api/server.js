import express from 'express';
import 'dotenv/config'
import cookieParser from 'cookie-parser';

// routers
import authRoutes from './routes/authRoutes.js'
import userRoute from './routes/userRoutes.js'
import messageRoute from './routes/messageRoute.js'
import gigRoute from './routes/gigRoute.js'
import conversationRoute from './routes/conversationRoute.js'
import orderRoute from './routes/orderRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import cors from 'cors'

// database connection configuration
import connectDB from './config/db.js';

const port = process.env.PORT || 8080
//middlewares
const app = express();
app.use(express.json())
app.use(cookieParser())

connectDB()

// routers
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/messages', messageRoute)

app.use((err, req, res, next) => {
    const statusCode = err.status || 500
    const message = err.message || 'Something went wrong'
    
    return res.status(statusCode).send(message)
})

app.use(cors({ origin: 'http://localhost:5173', credentials: true}))


app.listen(port, () => console.log(`Server is listening on port ${port}`))