const redux = require('redux')
const reactRedux = require('react-redux')
const { pets } = require('../public/mockData')

const SET_SEARCH_TERM = 'setSearchTerm'
const SET_SELECT_FILTER = 'setSelectFilter'
const SET_ACTIVE_PAGE = 'setActivePage'

const initialState = {
  searchTerm: '',
  selectFilter: '',
  activePage: 1,
  pageSize: 6,
  totalNumberOfPets: pets.length,
  pets: pets.slice(0, 6)
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reducerSearchTerm(state, action)
    case SET_SELECT_FILTER:
      return reducerSelectFilter(state, action)
    case SET_ACTIVE_PAGE:
      return reducerActivePage(state, action)
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

const reducerActivePage = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {activePage: action.value, pets: pageItems(action.value, state.pageSize, pets)})
  return newState
}

const pageItems = (pageNumber, pageSize, pets) => {
  const lowerLimit = pageSize * (pageNumber - 1)
  const upperLimit = pageSize * (pageNumber - 1) + pageSize
  return pets.slice(lowerLimit, upperLimit)
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    selectFilter: state.selectFilter,
    activePage: state.activePage,
    totalNumberOfPets: state.totalNumberOfPets,
    pageSize: state.pageSize,
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
    },
    setActivePage (activePage) {
      dispatch({type: SET_ACTIVE_PAGE, value: activePage})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
