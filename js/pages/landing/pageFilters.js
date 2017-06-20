const reducerLocationFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
      location: action.value,
      petType: state.filters.petType,
      autonomousComunity: state.filters.autonomousComunity,
      province: state.filters.province
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
      autonomousComunity: state.filters.autonomousComunity,
      province: state.filters.province
    }
  })

  return newState
}

const reducerAutonomousComunityFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
        location: state.filters.location,
        petType: state.filters.petType,
        autonomousComunity: action.value,
        province: state.filters.province
    }
  })

  return newState
}

const reducerProvinceFilter = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    filters: {
        location: state.filters.location,
        petType: state.filters.petType,
        autonomousComunity: state.filters.autonomousComunity,
        province: action.value
    }
  })

  return newState
}

module.exports = {
  reducerLocationFilter,
  reducerPetTypeFilter,
  reducerAutonomousComunityFilter,
  reducerProvinceFilter
}
