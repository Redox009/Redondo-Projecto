const express = require('express')
const fs = require('fs')
const app = express()




app.get('/', (req, res ) => {
    res.send('Hola Mundo')
})

app.get('/productos', (req, res ) => {
    let data = fs.readFileSync('./productos.txt')
    data = JSON.parse(data)
    res.send(data)
})

app.get('/productosRandom', (req, res ) => {
    let data = fs.readFileSync('./productos.txt')
    var dataR = data[Math.floor(Math.random() * data.length)];
    res.send( dataR )
})








const server = app.listen(8080, () => {
    console.log("servidor on")
})
server.on('error', (error) => console.log ('error en on'))


