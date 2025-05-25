import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './routes/index.js'
import { prisma } from './database/client.js'
const port = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(helmet())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

process.on('SIGINT', async()=>{
    await prisma.$disconnect();
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})

