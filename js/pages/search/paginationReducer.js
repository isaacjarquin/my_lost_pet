const { pets } = require('../../../public/mockData')

const reducerActivePage = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {activePage: action.value, pets: pageItems(action.value, state.pageSize, pets)})

  return newState
}

const pageItems = (pageNumber, pageSize, pets) => {
  const lowerLimit = pageSize * (pageNumber - 1)
  const upperLimit = (pageSize * (pageNumber - 1)) + pageSize

  return pets.slice(lowerLimit, upperLimit)
}

module.exports = { reducerActivePage }
