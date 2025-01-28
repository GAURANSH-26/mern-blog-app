const express = require('express')
const cors = require('cors')
const { userRouter } = require('./routers/userRouter')
const { postRouter } = require('./routers/postRouter')
const { connectDB } = require('./config/dbConfig')
const app = express()

const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// api endpoints
app.use('/api/users', userRouter)
app.use('api/posts', postRouter)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})