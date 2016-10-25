const React = require('react')
const ReactDOM = require('react-dom')

const Landing = require('./pages/Landing')
const Search = require('./pages/Search')
const PetDetails = require('./pages/PetDetails')

const Layout = require('./layouts/Layout')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const { store } = require('./Store')
const { Provider } = require('react-redux')

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={PetDetails} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
