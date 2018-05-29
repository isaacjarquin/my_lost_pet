const reducerLocationFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
      location: action.value,
      petType: state.filters.petType,
      petStatus: state.filters.petStatus
    }
  })

  return newState
}

const reducerPetTypeFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
      location: state.filters.location,
      petType: action.value,
      petStatus: state.filters.petStatus
    }
  })

  return newState
}

const reducerPetStatusFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
      location: state.filters.location,
      petType: state.filters.petType,
      petStatus: action.value
    }
  })

  return newState
}

module.exports = {
  reducerLocationFilter,
  reducerPetTypeFilter,
  reducerPetStatusFilter
}
