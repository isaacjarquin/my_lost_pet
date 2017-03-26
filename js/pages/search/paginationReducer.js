const reducerActivePage = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {activePage: action.value, activePagePets: pageItems(action.value, state.pageSize, state.pets)})

  return newState
}

const pageItems = (pageNumber, pageSize, pets) => {
  const lowerLimit = pageSize * (pageNumber - 1)
  const upperLimit = (pageSize * (pageNumber - 1)) + pageSize

  return pets.slice(lowerLimit, upperLimit)
}

module.exports = { reducerActivePage }
