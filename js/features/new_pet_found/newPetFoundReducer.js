const reducerPetFounderName = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: action.value,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
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
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
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
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
      description: state.pet.description
    }
  })
  return newState
}

const reducerBreed = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      breed: action.value,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
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
      breed: state.pet.breed,
      size: action.value,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
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
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: action.value,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetAutonomousComunity = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      autonomousComunity: action.value,
      province: state.pet.province,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
      imageUrl: state.pet.imageUrl,
      images: state.pet.images,
      description: state.pet.description
    }
  })
  return newState
}

const reducerPetProvince = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    pet: {
      founderName: state.pet.founderName,
      founderEmail: state.pet.founderEmail,
      petType: state.pet.petType,
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      autonomousComunity: state.pet.autonomousComunity,
      province: action.value,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
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
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
      location: action.value.address,
      latitud: action.value.latLng.lat,
      longitud: action.value.latLng.lng,
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
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
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
      breed: state.pet.breed,
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      latitud: state.pet.latitud,
      longitud: state.pet.longitud,
      autonomousComunity: state.pet.autonomousComunity,
      province: state.pet.province,
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
  reducerBreed,
  reducerPetSize,
  reducerPetFoundDate,
  reducerPetAutonomousComunity,
  reducerPetProvince,
  reducerPetLocation,
  reducerPetImages,
  reducerPetDescription,
  reducerValidationBackground,
  reducerEncloseImageTitle
}
