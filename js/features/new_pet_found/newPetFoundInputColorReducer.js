const reducerAutonomousComunityInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: action.value,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerFounderNameInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: action.value,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerFounderEmailInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: action.value,
        petType: state.inputColor.newPetFound.petType,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerPetTypeInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: action.value,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerPetStatusInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        petStatus: action.value,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerBreedInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: action.value,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerSizeInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: state.inputColor.newPetFound.breed,
        size: action.value,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerLocationInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: action.value,
        description: state.inputColor.newPetFound.description
      }
    }
  })

  return newState
}

const reducerDescriptionInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        petStatus: state.inputColor.newPetFound.petStatus,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: action.value
      }
    }
  })

  return newState
}

module.exports = {
  reducerAutonomousComunityInputColor,
  reducerFounderNameInputColor,
  reducerFounderEmailInputColor,
  reducerBreedInputColor,
  reducerPetTypeInputColor,
  reducerPetStatusInputColor,
  reducerSizeInputColor,
  reducerLocationInputColor,
  reducerDescriptionInputColor
}
