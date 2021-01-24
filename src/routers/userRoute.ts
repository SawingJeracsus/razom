import express from 'express'
import md5 from 'md5'

import { User } from '../models/User'
import { validateEmail } from "../libs/validateEmail"

const userRouter = express.Router()

userRouter.get('/login', async (req: express.Request, res: express.Response) => {
    const {login, password}  = req.query    

    //@ts-ignore
    const passwordHash = password ? md5(password) : ""

    let valid = false

    let user = await User.findOne({
        login,
        password: passwordHash
    })
    valid = true
    if(!user){
        user = await User.findOne({
            email: login,
            password: passwordHash
        }) 
        if(!user){
            valid = false
        } 
    }

    if(valid){
        res.json({
            code: 200,
            userId: user._id
        })
    }else{
        res.json({
            code: 404,
            message: "Invalid password or login/email"
        })
    }
    
})

userRouter.post('/create', async (req: express.Request, res: express.Response) => {
    
    const {login, password, email, birthDay}  = req.query
    const errors: string[] = [];
    
    const validateForExist = (property: any ,name: string) => {
        if(!property){
            errors.push(`${name} has not recieved!`)
        }
    }
    const validateLength = (property: any[] | string, length: number, name: string) => {
        if(property.length < length){
            errors.push(`${name} should containe minimum ${length} charts!`)
        }
    }

    validateForExist(login, 'Login')
    validateForExist(password, 'Password')
    validateForExist(email, 'Email')
    validateForExist(birthDay, 'Birth date')

    typeof login === "string" ? validateLength(login, 6, 'Login') : errors.push("Invalid type of login")
    typeof password === "string" ? validateLength(password, 8, 'Password') : errors.push("Invalid type of password")

    const validEmail = typeof email == "string" ? validateEmail(email) : errors.push("Invalid type of email")

    if(!validEmail){
        errors.push("Invalid format of email!")
    }
  
    if(errors.length !== 0){
        res.json({
            code: 401,
            errors: errors.length === 1 ? errors[0] : errors 
        })
    }else{
        const now = new Date()
        //@ts-ignore
        const passwordHash = md5(password)  
            
            const user = new User({
                login,
                email,
                password: passwordHash,
                birthDay,
                create_at: now.toISOString()
            })
            await user.save(err => {
                if(err?.message){
                    res.json({
                        code: 402,
                        message: 'Propably bad request!',
                        erorrs: err?.message
                    })
                }else{
                    res.json({
                        code: 200,
                        message: "Successfully saved!"
                    })
                }
            })
    }
})

export default userRouter