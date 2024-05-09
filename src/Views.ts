import express, { application, Request, Response} from "express";
import cors from 'cors'
import {z} from 'zod'

const router =  express.Router();
router.get('/', (req: Request, res:Response) => {
    res.send('there is nothing')
})

