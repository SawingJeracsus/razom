import express from "express"
import {info, error} from './libs/logger'
import CONFIG from './libs/config'

const app = express()

// app.get('/user/create', (res, rej) => {})

app.listen(CONFIG.PORT, () => {
    info("SERVER", `Server successfully started in ${CONFIG.PORT} port...`)
})

