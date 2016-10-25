const React = require('react')
const Landing = require('./pages/Landing')
const Search = require('./pages/Search')
const PetDetails = require('./pages/PetDetails')

const Layout = require('./layouts/Layout')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')

const { store } = require('./Store')
const { Provider } = require('react-redux')

const appRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={PetDetails} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {appRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = appRoutes

module.exports = App
