import express, { Request, Response } from 'express'
import cors from 'cors'
import compression from 'compression'
import session from 'express-session'
import helmet from 'helmet'
import { router } from './routes/index.js'
import { prisma } from './database/client.js'
const port = process.env.PORT ?? 3000
const app = express()
//configurando express-session
var sessionConfig = {
    secret: 'keyboard cat',
    cookie: { secure: false }
}
//para produção (não vai acontecer)
if (app.get('env') === 'production') {
    app.set('trust proxy', 1)
    sessionConfig.cookie.secure = true
}

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session(sessionConfig))
app.use(router)

process.on('SIGINT', async()=>{
    await prisma.$disconnect();
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})
