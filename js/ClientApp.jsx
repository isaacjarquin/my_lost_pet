const React = require('react')

const Layout = require('./layouts/Layout')
const { Router, browserHistory } = require('react-router')

const { store } = require('./Store')
const { Provider } = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], (error) => {
        if (error) {
          return console.error('BrowserEntry error', error)
        }
        cb(null, require('./pages/Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          if (error) {
            return console.error('search error', error)
          }
          cb(null, require('./pages/Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          if (error) {
            return console.error('details error', error)
          }
          cb(null, require('./pages/PetDetails'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
