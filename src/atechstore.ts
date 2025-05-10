import express, {Request, Response} from 'express'
import cors from 'cors'
import session from 'express-session'
const port = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!')
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})