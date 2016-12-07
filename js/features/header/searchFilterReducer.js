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

module.exports = { reducerSearchTerm, reducerSelectFilter }
