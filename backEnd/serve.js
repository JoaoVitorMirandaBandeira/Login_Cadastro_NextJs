const express = require('express')
const app = express()
require('dotenv').config();
const userRoutes = require('./routes/user')

app.use(express.json())
app.use(userRoutes)

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})