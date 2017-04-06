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
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
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
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
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
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
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
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
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
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
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
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetImages = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      imageUrl: state.pet.imageUrl,
      images: action.value,
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
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
      description: action.value
    }
  })
  return newState
}

const reducerValidationBackground = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validationBackground: action.value
  })

  return newState
}

const reducerEncloseImageTitle = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    encloseImageTitle: action.value
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
  reducerPetImages,
  reducerPetDescription,
  reducerValidationBackground,
  reducerEncloseImageTitle
}
