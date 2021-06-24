const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

// express está usando a pasta public
server.use(express.static("public"))

// Pega o caminho da pasta e junta o dirname(pasta src) com a pasta views
server.set('views', path.join(__dirname, 'views'))

// decodifica e passa para o controller
server.use(express.urlencoded({extended: true}))

// express está usando o arquivo route
server.use(route)

// inicia o servidor
server.listen(3000, () => console.log("RODANDO"))


/* 
  CONTINUAR EM 2:19:50 
  INICIAR O SERVIDOR: npm start
*/