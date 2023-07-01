const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user')

app.use(cors({
    origin: 'http://localhost:8080' // Substitua com a URL correta do seu front-end
}));

app.use(express.json())
app.use(userRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})