const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


  

app.get('/productos', (req, res) => {
    console.log('Request recibido')
    
    if (!req.query.titulo) {
      return res.json(productos)
    }
  
    const tituloFiltered = productos.filter(productos => productos.titulo === req.query.titulo)
  
    return res.json(tituloFiltered)
  })
  
  app.get('/productos/:id', (req, res) => {
    console.log('Request recibido')
  
    const id = Number(req.params.id)
    const producto = productos.find(productos => productos.id === id)
  
    if (!producto) {
      return res.status(404).json({
        error: 'Mensaje no encontrado'
      })
    }
  
    return res.json(producto)
  })
  
  app.post('/productos', (req, res) => {
    console.log('POST request recibido')
    console.log({ body: req.body })
  
    const newProducto = req.body
  
    newProducto.id = productos.length + 1
  
    productos.push(newProducto)
  
    return res.status(201).json(newProducto)
  })
  
  app.put('/productos/:id', (req, res) => {
    console.log('PUT request recibido')
  
    const id = Number(req.params.id)
    const productoIndex = productos.findIndex(productos => productos.id === id)
  
    if (productoIndex === -1) {
      return res.status(404).json({
        error: 'Mensaje no encontrado'
      })
    }
  
    const body = req.body
  
    productos[productoIndex].titulo = body.titulo
    productos[productoIndex].descripcion = body.descripcion
  
  
    return res.json(messages[messageIndex])
  })
  
  app.delete('/productos/:id', (req, res) => {
    console.log('DELETE request recibido')
  
    const id = Number(req.params.id)
    const productoIndex = productos.findIndex(productos => productos.id === id)
  
    if (messageIndex === -1) {
      return res.status(404).json({
        error: 'Mensaje no encontrado'
      })
    }
  
    productos = productos.filter(productos => productos.id !== id)
  
    return res.status(204).json({})
  })
  






const server = app.listen(8080, () => {
    console.log("servidor on")
})
server.on('error', (error) => console.log ('error en on'))


