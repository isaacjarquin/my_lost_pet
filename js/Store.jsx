const redux = require('redux')
const reactRedux = require('react-redux')
const { pets } = require('../public/mockData')

const SET_SEARCH_TERM = 'setSearchTerm'
const SET_SELECT_FILTER = 'setSelectFilter'

const initialState = {
  searchTerm: '',
  selectFilter: '',
  pets
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reducerSearchTerm(state, action)
    case SET_SELECT_FILTER:
      return reducerSelectFilter(state, action)
    default:
      return state
  }
}

const reducerSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const reducerSelectFilter = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {selectFilter: action.value})
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    selectFilter: state.selectFilter,
    pets: state.pets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    },
    setSelectFilter (selectFilter) {
      dispatch({type: SET_SELECT_FILTER, value: selectFilter})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
