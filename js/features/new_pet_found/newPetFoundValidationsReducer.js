const reducerSetAutonomousComunityValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: action.value,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        petStatus: state.validations.newPetFound.petStatus,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerFounderNameValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: action.value,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        petStatus: state.validations.newPetFound.petStatus,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerFounderEmailValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: action.value,
        petType: state.validations.newPetFound.petType,
        petStatus: state.validations.newPetFound.petStatus,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerPetTypeValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: action.value,
        petStatus: state.validations.newPetFound.petStatus,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerPetStatusValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        petStatus: action.value,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerBreedValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        petStatus: state.validations.newPetFound.petStatus,
        breed: action.value,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerSizeValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        petStatus: state.validations.newPetFound.petStatus,
        breed: state.validations.newPetFound.breed,
        size: action.value,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerLocationValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        petStatus: state.validations.newPetFound.petStatus,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: action.value,
        description: state.validations.newPetFound.description
      }
    }
  })

  return newState
}

const reducerDescriptionValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        petStatus: state.validations.newPetFound.petStatus,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: action.value
      }
    }
  })

  return newState
}

module.exports = {
  reducerSetAutonomousComunityValidation,
  reducerFounderNameValidation,
  reducerFounderEmailValidation,
  reducerBreedValidation,
  reducerPetTypeValidation,
  reducerPetStatusValidation,
  reducerSizeValidation,
  reducerLocationValidation,
  reducerDescriptionValidation
}
