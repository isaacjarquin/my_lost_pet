const reducerLocationFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
      location: action.value,
      petType: state.filters.petType
    }
  })

  return newState
}

const reducerPetTypeFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
      location: state.filters.location,
      petType: action.value
    }
  })

  return newState
}

module.exports = {
  reducerLocationFilter,
  reducerPetTypeFilter
}
