const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const Search = require('./search')
const { Router, Route, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
