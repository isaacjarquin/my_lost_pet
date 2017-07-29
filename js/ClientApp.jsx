const React = require('react')
const Layout = require('./layouts/Layout')
const { Router, browserHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const LandingPage = require('./pages/landing/index')
const SearchResultPage = require('./pages/search/index')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route pattern="/" component={LandingPage} />
          <Route path="search" component={SearchResultPage} />
        </Router>
      </Provider>
    )
  }
})

module.exports = App
