import express from 'express'
import './config/dotenv.js'
import path from 'path'
import { fileURLToPath } from 'url'
import patternsRouter from './routes/patterns.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.resolve(__dirname, './public')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

app.use('/patterns', patternsRouter)

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})