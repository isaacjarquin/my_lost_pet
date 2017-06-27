const redux = require('redux')
const reactRedux = require('react-redux')
const $ = require('jquery')

const {
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
  reducerEncloseImageTitle,
  reducerValidationBackground
} = require('../js/features/new_pet_found/newPetFoundReducer')

const {
  reducerOwnerName,
  reducerOwnerEmail,
  reducerOwnerPhoneNumber,
  reducerDescription
} = require('../js/pages/search/ownerReducer')

const {
  reducerSearchTerm,
  reducerSelectFilter,
  reducerFilteredPets
} = require('../js/features/header/searchFilterReducer')

const {
  reducerContactUsName,
  reducerContactUsEmail,
  reducerContactUsMessage
} = require('../js/features/contact_us/contactUsReducer')

const {
  reducerLocationFilter,
  reducerPetTypeFilter,
  reducerAutonomousComunityFilter,
  reducerProvinceFilter
} = require('../js/pages/landing/pageFilters')

const { reducerActivePage } = require('../js/pages/search/paginationReducer')
const reducerAlerts = require('../js/features/alerts/alertsReducer')
const resultDecorated = require('../js/pages/landing/resultDecorated')

const initialState = require('./InitialState')

const SET_SEARCH_TERM = 'setSearchTerm'
const SET_LOCATION_FILTER = 'setLocationFilter'
const SET_PET_TYPE_FILTER = 'setPetTypeFilter'
const SET_SELECT_FILTER = 'setSelectFilter'
const SET_ACTIVE_PAGE = 'setActivePage'
const SET_OWNER_NAME = 'setOwnerName'
const SET_OWNER_EMAIL = 'setOwnerEmail'
const SET_OWNER_PHONE_NUMBER = 'setOwnerPhoneNumber'
const SET_DESCRIPTION = 'setDescription'
const SET_PET_FOUNDER_NAME = 'setPetFounderName'
const SET_PET_FOUNDER_EMAIL = 'setPetFounderEmail'
const SET_PET_TYPE = 'setPetType'
const SET_BREED = 'setBreed'
const SET_PET_SIZE = 'setPetSize'
const SET_PET_FOUND_DATE = 'setPetFoundDate'
const SET_PET_LOCATION = 'setPetLocation'
const SET_IMAGES = 'setImages'
const SET_PET_DESCRIPTION = 'setPetDescription'
const SET_CONTACT_US_NAME = 'setContactUsName'
const SET_CONTACT_US_EMAIL = 'setContactUsEmail'
const SET_CONTACT_US_MESSAGE = 'setContactUsMessage'
const SET_ALERTS = 'setAlerts'
const SET_PETS = 'setPets'
const SET_ACTIVE_PAGE_PETS = 'setActivePagePets'
const SET_FILTERED_PETS = 'setFilteredPets'
const SET_TOTAL_NUMBER_OF_PETS = 'setTotalNumberOfPets'
const SET_ENCLOSE_IMAGE_TITLE = 'setEncloseImageTitle'
const SET_VALIDATION_BACKGROUND = 'setValidationBackground'
const SET_SOCIAL_KEYS = 'setSocialKeys'
const SET_CLOUDINARY = 'setCloudinary'
const SET_URLS = 'setUrls'
const SET_COMUNIDADES = 'setComunidades'
const SET_PROVINCIAS = 'setProvincias'
const SET_AUTONOMOUS_COMUNITY_FILTER = 'setAutonomousComunityFilter'
const SET_PROVINCE_FILTER = 'setProvinceFilter'
const SET_AUTONOMOUS_COMUNITY = 'setAutonomousComunity'
const SET_PROVINCE = 'setProvince'
const SET_AUTONOMOUS_COMUNITY_VALIDATION = 'setAutonomousComunityValidation'
const SET_FOUNDER_NAME_VALIDATION = 'setFounderNameValidation'
const SET_FOUNDER_EMAIL_VALIDATION = 'setFounderEmailValidation'
const SET_PET_TYPE_VALIDATION = 'setPetTypeValidation'
const SET_BREED_VALIDATION = 'setBreedValidation'
const SET_SIZE_VALIDATION = 'setSizeValidation'
const SET_LOCATION_VALIDATION = 'setLocationValidation'
const SET_DESCRIPTION_VALIDATION = 'setDescriptionValidation'
const SET_FOUNDER_NAME_INPUT_COLOR = 'setFounderNameInputColor'
const SET_FOUNDER_EMAIL_INPUT_COLOR = 'setFounderEmailInputColor'
const SET_PET_TYPE_INPUT_COLOR = 'setPetTypeInputColor'
const SET_BREED_INPUT_COLOR = 'setBreedInputColor'
const SET_SIZE_INPUT_COLOR = 'setSizeInputColor'
const SET_LOCATION_INPUT_COLOR = 'setLocationInputColor'
const SET_DESCRIPTION_INPUT_COLOR = 'setDescriptionInputColor'
const SET_AUTONOMOUS_COMUNITY_INPUT_COLOR = 'setAutonomousComunityInputColor'

const reducerPets = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    pets: action.value,
    totalNumberOfPets: action.value.length
  })

  return newState
}

const reducerTotalNumberOfPets = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    totalNumberOfPets: action.value.length
  })

  return newState
}

const reducerActivePagePets = (state, action) => {
  const newState = {}

  Object.assign(newState, state, { activePagePets: action.value })

  return newState
}

const reducerSocialKeys = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    social: {
      facebook: action.value.facebook,
      twitter: action.value.twitter
    }
  })

  return newState
}

const reducerCloudinary = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    cloudinary: {
      upload_preset: action.value.upload_preset,
      upload_url: action.value.upload_url
    }
  })

  return newState
}

const reducerUrls = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    urls: {
      host: action.value.host,
      items_api: action.value.items_api
    }
  })

  return newState
}

const reducerComunidades = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    comunidades: action.value
  })

  return newState
}

const reducerProvincias = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    provincias: action.value
  })

  return newState
}

const reducerSetAutonomousComunityValidation = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    validations: {
      newPetFound: {
        autonomousComunity: action.value,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
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
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: action.value
      }
    }
  })

  return newState
}

const reducerAutonomousComunityInputColor = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    inputColor: {
      newPetFound: {
        autonomousComunity: action.value,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
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
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: action.value
      }
    }
  })

  return newState
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reducerSearchTerm(state, action)
    case SET_SELECT_FILTER:
      return reducerSelectFilter(state, action)
    case SET_LOCATION_FILTER:
      return reducerLocationFilter(state, action)
    case SET_PET_TYPE_FILTER:
      return reducerPetTypeFilter(state, action)
    case SET_ACTIVE_PAGE:
      return reducerActivePage(state, action)
    case SET_OWNER_NAME:
      return reducerOwnerName(state, action)
    case SET_OWNER_EMAIL:
      return reducerOwnerEmail(state, action)
    case SET_OWNER_PHONE_NUMBER:
      return reducerOwnerPhoneNumber(state, action)
    case SET_DESCRIPTION:
      return reducerDescription(state, action)
    case SET_PET_FOUNDER_NAME:
      return reducerPetFounderName(state, action)
    case SET_PET_FOUNDER_EMAIL:
      return reducerPetFounderEmail(state, action)
    case SET_PET_TYPE:
      return reducerPetType(state, action)
    case SET_BREED:
      return reducerBreed(state, action)
    case SET_PET_SIZE:
      return reducerPetSize(state, action)
    case SET_PET_FOUND_DATE:
      return reducerPetFoundDate(state, action)
    case SET_PET_LOCATION:
      return reducerPetLocation(state, action)
    case SET_IMAGES:
      return reducerPetImages(state, action)
    case SET_PET_DESCRIPTION:
      return reducerPetDescription(state, action)
    case SET_CONTACT_US_NAME:
      return reducerContactUsName(state, action)
    case SET_CONTACT_US_EMAIL:
      return reducerContactUsEmail(state, action)
    case SET_CONTACT_US_MESSAGE:
      return reducerContactUsMessage(state, action)
    case SET_ALERTS:
      return reducerAlerts(state, action)
    case SET_PETS:
      return reducerPets(state, action)
    case SET_ACTIVE_PAGE_PETS:
      return reducerActivePagePets(state, action)
    case SET_FILTERED_PETS:
      return reducerFilteredPets(state, action)
    case SET_TOTAL_NUMBER_OF_PETS:
      return reducerTotalNumberOfPets(state, action)
    case SET_ENCLOSE_IMAGE_TITLE:
      return reducerEncloseImageTitle(state, action)
    case SET_VALIDATION_BACKGROUND:
      return reducerValidationBackground(state, action)
    case SET_SOCIAL_KEYS:
      return reducerSocialKeys(state, action)
    case SET_CLOUDINARY:
      return reducerCloudinary(state, action)
    case SET_URLS:
      return reducerUrls(state, action)
    case SET_COMUNIDADES:
      return reducerComunidades(state, action)
    case SET_PROVINCIAS:
      return reducerProvincias(state, action)
    case SET_AUTONOMOUS_COMUNITY_FILTER:
      return reducerAutonomousComunityFilter(state, action)
    case SET_PROVINCE_FILTER:
      return reducerProvinceFilter(state, action)
    case SET_AUTONOMOUS_COMUNITY:
      return reducerPetAutonomousComunity(state, action)
    case SET_PROVINCE:
      return reducerPetProvince(state, action)
    case SET_AUTONOMOUS_COMUNITY_VALIDATION:
      return reducerSetAutonomousComunityValidation(state, action)
    case SET_FOUNDER_NAME_VALIDATION:
      return reducerFounderNameValidation(state, action)
    case SET_FOUNDER_EMAIL_VALIDATION:
      return reducerFounderEmailValidation(state, action)
    case SET_PET_TYPE_VALIDATION:
      return reducerPetTypeValidation(state, action)
    case SET_BREED_VALIDATION:
      return reducerBreedValidation(state, action)
    case SET_SIZE_VALIDATION:
      return reducerSizeValidation(state, action)
    case SET_LOCATION_VALIDATION:
      return reducerLocationValidation(state, action)
    case SET_DESCRIPTION_VALIDATION:
      return reducerDescriptionValidation(state, action)
    case SET_FOUNDER_NAME_INPUT_COLOR:
      return reducerFounderNameInputColor(state, action)
    case SET_FOUNDER_EMAIL_INPUT_COLOR:
      return reducerFounderEmailInputColor(state, action)
    case SET_PET_TYPE_INPUT_COLOR:
      return reducerPetTypeInputColor(state, action)
    case SET_BREED_INPUT_COLOR:
      return reducerBreedInputColor(state, action)
    case SET_SIZE_INPUT_COLOR:
      return reducerSizeInputColor(state, action)
    case SET_LOCATION_INPUT_COLOR:
      return reducerLocationInputColor(state, action)
    case SET_DESCRIPTION_INPUT_COLOR:
      return reducerDescriptionInputColor(state, action)
    case SET_AUTONOMOUS_COMUNITY_INPUT_COLOR:
      return reducerAutonomousComunityInputColor(state, action)
    default:
      return state
  }
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    selectFilter: state.selectFilter,
    activePage: state.activePage,
    totalNumberOfPets: state.totalNumberOfPets,
    pageSize: state.pageSize,
    pets: state.pets,
    activePagePets: state.activePagePets,
    encloseImageTitle: state.encloseImageTitle,
    validationBackground: state.validationBackground,
    filteredPets: state.filteredPets,
    comunidades: state.comunidades,
    provincias: state.provincias,
    validations: {
      newPetFound: {
        autonomousComunity: state.validations.newPetFound.autonomousComunity,
        founderName: state.validations.newPetFound.founderName,
        founderEmail: state.validations.newPetFound.founderEmail,
        petType: state.validations.newPetFound.petType,
        breed: state.validations.newPetFound.breed,
        size: state.validations.newPetFound.size,
        location: state.validations.newPetFound.location,
        description: state.validations.newPetFound.description
      }
    },
    inputColor: {
      newPetFound: {
        autonomousComunity: state.inputColor.newPetFound.autonomousComunity,
        founderName: state.inputColor.newPetFound.founderName,
        founderEmail: state.inputColor.newPetFound.founderEmail,
        petType: state.inputColor.newPetFound.petType,
        breed: state.inputColor.newPetFound.breed,
        size: state.inputColor.newPetFound.size,
        location: state.inputColor.newPetFound.location,
        description: state.inputColor.newPetFound.description
      }
    },
    urls: {
      host: state.urls.host,
      items_api: state.urls.items_api
    },
    cloudinary: {
      upload_preset: state.cloudinary.upload_preset,
      upload_url: state.cloudinary.upload_url
    },
    social: {
      facebook: state.social.facebook,
      twitter: state.social.twitter
    },
    filters: {
      location: state.filters.location,
      petType: state.filters.petType,
      autonomousComunity: state.filters.autonomousComunity,
      province: state.filters.province
    },
    owner: {
      name: state.owner.name,
      email: state.owner.email,
      phoneNumber: state.owner.phoneNumber,
      description: state.owner.description
    },
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
      images: state.pet.images,
      description: state.pet.description,
      extraDescription: state.pet.extraDescription,
      extraDescriptionHidden: state.pet.extraDescriptionHidden,
      showExtraInfo: state.pet.showExtraInfo
    },
    contactUs: {
      name: state.contactUs.name,
      email: state.contactUs.email,
      message: state.contactUs.message
    },
    alert: {
      type: state.alert.type,
      message: state.alert.message,
      visible: state.alert.visible,
      newPetFound: state.alert.newPetFound,
      contactUs: state.alert.contactUs
    }
  }
}

const getFilteredPets = (searchTerm, location, pets, selectFilter) => {
  const filteredPets = pets
    .filter((pet) => `${pet.location}`.toUpperCase().indexOf(location.toUpperCase()) >= 0)
    .filter((pet) => `${pet.breed}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
    .filter((pet) => `${pet.size}`.toUpperCase().indexOf(selectFilter.toUpperCase()) >= 0)
    .map((pet) => pet)

  return filteredPets
}

const urlParams = ({province, autonomousComunity, petType}) => {
  if (autonomousComunity !== '' && province !== '' && petType !== '') {
    return { autonomousComunity: autonomousComunity, province: province, petType: petType }
  } else if (autonomousComunity !== '' && province === '' && petType === '') {
    return { autonomousComunity: autonomousComunity }
  } else if (autonomousComunity === '' && province !== '' && petType === '') {
    return { province: province }
  } else if (autonomousComunity === '' && province === '' && petType !== '') {
    return { petType: petType }
  } else if (autonomousComunity !== '' && province !== '' && petType === '') {
    return { autonomousComunity: autonomousComunity, province: province }
  } else if (autonomousComunity !== '' && province === '' && petType !== '') {
    return { autonomousComunity: autonomousComunity, petType: petType }
  } else if (autonomousComunity === '' && province !== '' && petType !== '') {
    return { province: province, petType: petType }
  } else {
    return {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm, location, pets, selectFilter, activePage) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
      dispatch({type: SET_LOCATION_FILTER, value: location})
      dispatch({type: SET_FILTERED_PETS, value: getFilteredPets(searchTerm, location, pets, selectFilter)})
      dispatch({type: SET_ACTIVE_PAGE_PETS, value: getFilteredPets(searchTerm, location, pets, selectFilter)})
      dispatch({type: SET_TOTAL_NUMBER_OF_PETS, value: getFilteredPets(searchTerm, location, pets, selectFilter)})
      dispatch({type: SET_ACTIVE_PAGE, value: 1})
    },
    setPetTypeFilter (petType) {
      dispatch({type: SET_PET_TYPE_FILTER, value: petType})
    },
    setSelectFilter (searchTerm, location, pets, selectFilter, activePage) {
      dispatch({type: SET_SELECT_FILTER, value: selectFilter})
      dispatch({type: SET_LOCATION_FILTER, value: location})
      dispatch({type: SET_FILTERED_PETS, value: getFilteredPets(searchTerm, location, pets, selectFilter)})
      dispatch({type: SET_ACTIVE_PAGE_PETS, value: getFilteredPets(searchTerm, location, pets, selectFilter)})
      dispatch({type: SET_TOTAL_NUMBER_OF_PETS, value: getFilteredPets(searchTerm, location, pets, selectFilter)})
      dispatch({type: SET_ACTIVE_PAGE, value: 1})
    },
    setActivePage (activePage) {
      dispatch({type: SET_ACTIVE_PAGE, value: activePage})
    },
    setOwnerName (ownerName) {
      dispatch({type: SET_OWNER_NAME, value: ownerName})
    },
    setOwnerEmail (ownerEmail) {
      dispatch({type: SET_OWNER_EMAIL, value: ownerEmail})
    },
    setOwnerPhoneNumber (ownerPhoneNumber) {
      dispatch({type: SET_OWNER_PHONE_NUMBER, value: ownerPhoneNumber})
    },
    setDescription (description) {
      dispatch({type: SET_DESCRIPTION, value: description})
    },
    setPetFounderName (petFounderName) {
      dispatch({type: SET_PET_FOUNDER_NAME, value: petFounderName})
      dispatch({type: SET_FOUNDER_NAME_VALIDATION, value: 'displayNone'})
      dispatch({type: SET_FOUNDER_NAME_INPUT_COLOR, value: ''})
    },
    setPetFounderEmail (petFounderEmail) {
      dispatch({type: SET_PET_FOUNDER_EMAIL, value: petFounderEmail})
      dispatch({type: SET_FOUNDER_EMAIL_VALIDATION, value: 'displayNone'})
      dispatch({type: SET_FOUNDER_EMAIL_INPUT_COLOR, value: ''})
    },
    setPetType (petType) {
      dispatch({type: SET_PET_TYPE, value: petType})
      dispatch({type: SET_PET_TYPE_VALIDATION, value: 'displayNone'})
      dispatch({type: SET_PET_TYPE_INPUT_COLOR, value: ''})
    },
    setBreed (breed) {
      dispatch({type: SET_BREED, value: breed})
      dispatch({type: SET_BREED_VALIDATION, value: 'displayNone'})
      dispatch({type: SET_BREED_INPUT_COLOR, value: ''})
    },
    setPetSize (petSize) {
      dispatch({type: SET_PET_SIZE, value: petSize})
      dispatch({type: SET_SIZE_VALIDATION, value: 'displayNone'})
      dispatch({type: SET_SIZE_INPUT_COLOR, value: ''})
    },
    setPetFoundDate (petFoundDate) {
      dispatch({type: SET_PET_FOUND_DATE, value: petFoundDate})
    },
    setPetLocation (petLocation) {
      dispatch({type: SET_PET_LOCATION, value: petLocation})
      dispatch({type: SET_LOCATION_VALIDATION, value: 'displayNone'})
      dispatch({type: SET_LOCATION_INPUT_COLOR, value: ''})
    },
    setImages (images) {
      dispatch({type: SET_IMAGES, value: images})
      dispatch({type: SET_ENCLOSE_IMAGE_TITLE, value: ''})
      dispatch({type: SET_VALIDATION_BACKGROUND, value: ''})
    },
    setPetDescription (petDescription) {
      dispatch({type: SET_PET_DESCRIPTION, value: petDescription})
      dispatch({type: SET_DESCRIPTION_VALIDATION, value: 'displayNone'})
      dispatch({type: SET_DESCRIPTION_INPUT_COLOR, value: ''})
    },
    setContactUsName (name) {
      dispatch({type: SET_CONTACT_US_NAME, value: name})
    },
    setContactUsEmail (email) {
      dispatch({type: SET_CONTACT_US_EMAIL, value: email})
    },
    setContactUsMessage (message) {
      dispatch({type: SET_CONTACT_US_MESSAGE, value: message})
    },
    setAlerts (alert) {
      dispatch({type: SET_ALERTS, value: alert})
    },
    setPets (pets) {
      dispatch({type: SET_PETS, value: pets})
    },
    setActivePagePets (pets) {
      dispatch({type: SET_ACTIVE_PAGE_PETS, value: pets})
    },
    setFilteredPets (pets) {
      dispatch({type: SET_FILTERED_PETS, value: pets})
    },
    setEnvs ({social, cloudinary, urls}) {
      dispatch({type: SET_SOCIAL_KEYS, value: social})
      dispatch({type: SET_CLOUDINARY, value: cloudinary})
      dispatch({type: SET_URLS, value: urls})
    },
    setComunidades (comunidades) {
      dispatch({type: SET_COMUNIDADES, value: comunidades})
    },
    setProvincias (provincias) {
      dispatch({type: SET_PROVINCIAS, value: provincias})
    },
    setAutonomousComunityFilter (autonomousComunityFilter) {
      dispatch({type: SET_AUTONOMOUS_COMUNITY_FILTER, value: autonomousComunityFilter})
    },
    setProvinceFilter (provinceFilter) {
      dispatch({type: SET_PROVINCE_FILTER, value: provinceFilter})
    },
    setAutonomousComunity (autonomousComunity) {
      dispatch({type: SET_AUTONOMOUS_COMUNITY, value: autonomousComunity})
      dispatch({type: SET_AUTONOMOUS_COMUNITY_VALIDATION, value: 'displayNone'})
    },
    setProvince (province) {
      dispatch({type: SET_PROVINCE, value: province})
    },
    setAutonomousComunityValidation ({founderName, founderEmail, petType, breed, size, location, description, autonomousComunity, images}) {
      if (founderName === '') {
        dispatch({type: SET_FOUNDER_NAME_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_FOUNDER_NAME_INPUT_COLOR, value: 'fields-color'})
      }
      if (founderEmail === '') {
        dispatch({type: SET_FOUNDER_EMAIL_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_FOUNDER_EMAIL_INPUT_COLOR, value: 'fields-color'})
      }
      if (petType === '') {
        dispatch({type: SET_PET_TYPE_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_PET_TYPE_INPUT_COLOR, value: 'fields-color'})
      }
      if (breed === '') {
        dispatch({type: SET_BREED_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_BREED_INPUT_COLOR, value: 'fields-color'})
      }
      if (size === '') {
        dispatch({type: SET_SIZE_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_SIZE_INPUT_COLOR, value: 'fields-color'})
      }
      if (location === '') {
        dispatch({type: SET_LOCATION_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_LOCATION_INPUT_COLOR, value: 'fields-color'})
      }
      if (description === '') {
        dispatch({type: SET_DESCRIPTION_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_DESCRIPTION_INPUT_COLOR, value: 'fields-color'})
      }
      if (autonomousComunity === '') {
        dispatch({type: SET_AUTONOMOUS_COMUNITY_VALIDATION, value: 'displayTrue'})
        dispatch({type: SET_AUTONOMOUS_COMUNITY_INPUT_COLOR, value: 'fields-color'})
      }
      if (!images[0]) {
        dispatch({type: SET_ENCLOSE_IMAGE_TITLE, value: 'Debes añadir una foto de la mascota para poder enviar los datos.'})
        dispatch({type: SET_VALIDATION_BACKGROUND, value: 'validation-color'})
      }
    },
    getPets ({urls, filters}) {
      $.ajax({
        url: urls.items_api + '/api/items',
        data: urlParams(filters),
        cache: false,
        type: 'GET',
        success: function (response) {
          const result = resultDecorated(response.data)
          const activePagePets = result.slice(0, 6)

          dispatch({type: SET_PETS, value: result})
          dispatch({type: SET_FILTERED_PETS, value: result})
          dispatch({type: SET_ACTIVE_PAGE_PETS, value: activePagePets})
        },
        error: function (xhr) {
          console.log(xhr)
        }
      })
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
