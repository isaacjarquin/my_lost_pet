const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./pages/Landing')
const Search = require('./pages/Search')
const Layout = require('./Layout')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
