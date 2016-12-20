const reducerPetFounderName = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: action.value,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      petImage: state.pet.petImage,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetFounderEmail = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: action.value,
      petType: state.pet.petType,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      petImage: state.pet.petImage,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetType = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: action.value,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      petImage: state.pet.petImage,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetSize = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      size: action.value,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      petImage: state.pet.petImage,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetFoundDate = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      size: state.pet.size,
      foundDate: action.value,
      location: state.pet.location,
      petImage: state.pet.petImage,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetLocation = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: action.value,
      petImage: state.pet.petImage,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetImage = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      petImage: action.value,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetDescription = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      petImage: state.pet.petImage,
      description: action.value
    }
  })
  return newState
}

module.exports = {
  reducerPetFounderName,
  reducerPetFounderEmail,
  reducerPetType,
  reducerPetSize,
  reducerPetFoundDate,
  reducerPetLocation,
  reducerPetImage,
  reducerPetDescription
}
