const express = require('express')
const app = express()

const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Adriano')`;

connection.query(sql);
connection.end(); 

app.get('/', (req, res) => {
    res.send(`
              <h1>FullCycle 2.0</h1>
              </br>
              <p>Só funfou depois que instalou o nodemon para reinicar o serviço sozinho após qualquer mudança.</p>
            `);
})

app.listen(port, ()=> {
    console.log('rodando na porta '  + port)
})