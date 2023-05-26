import morgan from 'morgan'
import express from 'express'
import connectDB from '../../DB/connection.js'
import { GEH } from '../services/errorHandling.js'
import authRouter from './auth/auth.router.js'
import userRouter from './user/user.router.js'
import DiabetesRouter from './Diabetes/Diabetes.router.js'
import liverRouter from './liver/liver.router.js'
import HeartRouter from './Heart/Heart.router.js'
import ChronicRouter from './Chronic/Chronic.router.js'

import CancerRouter from './cencer/Cancer.router.js'

import cors from "cors"





export const appRouter = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cors({}))
    //convert Buffer Data
    // if (process.env.mood === "DEV") {
    //     app.use(morgan("dev"))

    // } else {
    //     app.use(morgan("combined"))

    // }

    // setup api routing
    app.get("/",(req,res)=>{

        res.send('<h1>Graduation-project</h1>')
    })
    //Base url
    const baseUrl = process.env.BASEURL 
    //Setup API Routing 
    app.use(`${baseUrl}/auth`, authRouter)
    app.use(`${baseUrl}/user`, userRouter)
    app.use(`${baseUrl}/Diabetes`,DiabetesRouter )
    app.use(`${baseUrl}/liver`,liverRouter )
    app.use(`${baseUrl}/Heart`,HeartRouter )
    app.use(`${baseUrl}/Chronic`,ChronicRouter )
    app.use(`${baseUrl}/Cancer`,CancerRouter )

    app.use('*', (req, res, next) => {
        res.send("In-valid Routing Plz check url  or  method")
    })
    //error handling
    app.use(GEH)
    //database
    connectDB()
}

