const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'

const initialiState = {
  searchTerm: ''
}

const rootReducer = (state = initialiState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reducerSearchTerm(state, action)
    default:
      return state
  }
}

const reducerSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer)

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
