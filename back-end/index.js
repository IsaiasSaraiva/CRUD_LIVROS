const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(3001, ()=>{
    console.log('Servidor Iniciado!')
})