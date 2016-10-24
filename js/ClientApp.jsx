const React = require('react')
const ReactDOM = require('react-dom')

const Landing = require('./pages/Landing')
const Search = require('./pages/Search')
const PetDetails = require('./pages/PetDetails')

const Layout = require('./layouts/Layout')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const { pets } = require('../public/mockData')

const { store } = require('./Store')
const { Provider } = require('react-redux')

const App = React.createClass({
  assignPet (nextState, replace) {
    const petArray = pets.filter((pet) => pet.id === nextState.params.id)

    if (petArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, petArray[0])
    return nextState
  },
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} pets={pets} />
            <Route path='/details/:id' component={PetDetails} onEnter={this.assignPet} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
