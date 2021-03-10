const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>FullCycle 2.0</h1></br><p>Só funfou depois que instalou o nodemon para reinicar o serviço sozinho após qualquer mudança.</p>')
})

app.listen(port, ()=> {
    console.log('rodando na porta '  + port)
})