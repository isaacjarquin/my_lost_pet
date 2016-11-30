const redux = require('redux')
const reactRedux = require('react-redux')
const { pets } = require('../public/mockData')

const SET_SEARCH_TERM = 'setSearchTerm'
const SET_SELECT_FILTER = 'setSelectFilter'
const SET_ACTIVE_PAGE = 'setActivePage'
const SET_OWNER_NAME = 'setOwnerName'
const SET_OWNER_EMAIL = 'setOwnerEmail'
const SET_OWNER_PHONE_NUMBER = 'setOwnerPhoneNumber'
const SET_DESCRIPTION = 'setDescription'

const initialState = {
  searchTerm: '',
  selectFilter: '',
  activePage: 1,
  pageSize: 6,
  totalNumberOfPets: pets.length,
  pets: pets.slice(0, 6),
  ownerName: '',
  ownerEmail: '',
  ownerPhoneNumber: '',
  description: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reducerSearchTerm(state, action)
    case SET_SELECT_FILTER:
      return reducerSelectFilter(state, action)
    case SET_ACTIVE_PAGE:
      return reducerActivePage(state, action)
    case SET_OWNER_NAME:
      return reducerOwnerName(state, action)
    case SET_OWNER_EMAIL:
      return reducerOwnerEmail(state, action)
    case SET_OWNER_PHONE_NUMBER:
      return reducerOwnerPhoneNumber(state, action)
    case SET_DESCRIPTION:
      return reducerDescription(state, action)
    default:
      return state
  }
}

const reducerSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const reducerOwnerName = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {ownerName: action.value})
  return newState
}

const reducerOwnerEmail = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {ownerEmail: action.value})
  return newState
}

const reducerOwnerPhoneNumber = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {ownerPhoneNumber: action.value})
  return newState
}

const reducerDescription = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {description: action.value})
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
    pets: state.pets,
    ownerName: state.ownerName,
    ownerEmail: state.ownerEmail,
    ownerPhoneNumber: state.ownerPhoneNumber,
    description: state.description
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
    },
    setOwnerName (ownerName) {
      dispatch({type: SET_OWNER_NAME, value: ownerName})
    },
    setOwnerEmail (ownerEmail) {
      dispatch({type: SET_OWNER_EMAIL, value: ownerEmail})
    },
    setOwnerPhoneNumber (ownerPhoneNumber) {
      dispatch({type: SET_OWNER_PHONE_NUMBER, value: ownerPhoneNumber})
    },
    setDescription (description) {
      dispatch({type: SET_DESCRIPTION, value: description})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
