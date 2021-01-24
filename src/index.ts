import express from "express"
import mongoose from 'mongoose'
import {info, error} from './libs/logger'
import CONFIG from './libs/config'
import cors from 'cors'
import userRouter from './routers/userRoute'

mongoose.connect('mongodb+srv://root:root@cluster0.4gb9e.azure.mongodb.net/razom?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
mongoose.connection.on("error", (e) => error("MONGO_CONNECT", 'Error in connection method!', e))

const app = express()
app.use(cors())
app.use('/user', userRouter)

app.listen(CONFIG.PORT, () => {
    info("SERVER", `Server successfully started in ${CONFIG.PORT} port...`)
})