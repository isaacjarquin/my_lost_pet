const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')
const { match } = require('react-router')
const rootEl = document.getElementById('app')
import {AppContainer} from 'react-hot-loader'

match({ routes: App }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry error', error)
  }
  if ( module.hot ) {
    module.hot.accept('./App', () => {
      ReactDOM.render(<AppContainer><App {...renderProps} /></AppContainer>, rootEl)
    })
  }
})
