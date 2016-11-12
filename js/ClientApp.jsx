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

const consoleErrorLogger = (location, error) => {
  if (error) {
    console.error(location, error)
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], (error) => {
        consoleErrorLogger('BrowserEntry error', error)
        cb(null, require('./pages/landing/index'))
      })
    }
  },
  childRoutes: [
    {
      path: '/search',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          consoleErrorLogger('Search error', error)
          cb(null, require('./pages/search/index'))
        })
      }
    },
    {
      path: '/details/:id',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          consoleErrorLogger('Details error', error)
          cb(null, require('./pages/pet-details/index'))
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
