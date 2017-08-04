require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const { match } = ReactRouter
const RouterContext = ReactRouter.RouterContext
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
const Store = require('./js/Store.jsx')
const store = Store.store
const _ = require('lodash')
const fs = require('fs')
const port = process.env.PORT || 5070
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const ClientApp = require('./js/ClientApp.jsx')
const Routes = ClientApp.Routes
const path = require('path')
const comunidades = require('./js/data/comunidades.js')
const envs = require('./js/data/envs.js')
const pets = require('./js/data/pets.js')

const server = express()

server.use('/public', express.static('./public'))

server.get('/api/envs', function (req, res) {
  res.send(JSON.stringify(envs))
})

server.get('/api/comunidades', function (req, res) {
  res.send(JSON.stringify(comunidades))
})

server.get('/api/pets', function (req, res) {
  res.send(JSON.stringify(pets))
})

server.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))

server.use((err, req, res, next) => {
  match({routes: Routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store},
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({body: body}))
    } else {
      res.status(404).send('Not found')
    }
  })
})

console.log('listening on port ' + port)
server.listen(port)
