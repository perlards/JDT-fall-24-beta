import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: 'TBD',

})
app.post('/chat', async (req, res) => { 
    const userInput = req.body.userInputlet 
    responseMessege = result.response.tect()
    try {
    const result = await model.generativeContent(userinput)
    responseMessage = result.repsonse.text()
    } catch(e) {
    responseMessage = 'Oops, something went wrong!'
    }
    res.json({
    messege: responseMessege,
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})