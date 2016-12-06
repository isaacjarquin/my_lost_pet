const redux = require('redux')
const reactRedux = require('react-redux')
const { pets } = require('../public/mockData')

const SET_SEARCH_TERM = 'setSearchTerm'
const SET_SELECT_FILTER = 'setSelectFilter'
const SET_ACTIVE_PAGE = 'setActivePage'

const SET_OWNER_NAME = 'setOwnerName'
const SET_OWNER_EMAIL = 'setOwnerEmail'
const SET_OWNER_PHONE_NUMBER = 'setOwnerPhoneNumber'
const SET_DESCRIPTION = 'setDescription'

const SET_PET_FOUNDER_NAME = 'setPetFounderName'
const SET_PET_FOUNDER_EMAIL = 'setPetFounderEmail'
const SET_PET_TYPE = 'setPetType'
const SET_PET_SIZE = 'setPetSize'
const SET_PET_FOUND_DATE = 'setPetFoundDate'
const SET_PET_LOCATION = 'setPetLocation'
const SET_PET_IMAGE = 'setPetImage'
const SET_PET_DESCRIPTION = 'setPetDescription'

const initialState = {
  searchTerm: '',
  selectFilter: '',
  activePage: 1,
  pageSize: 6,
  totalNumberOfPets: pets.length,
  pets: pets.slice(0, 6),
  owner: {
    name: '',
    email: '',
    phoneNumber: '',
    description: ''
  },
  pet: {
    founderName: '',
    founderEmail: '',
    petType: '',
    size: '',
    foundDate: '',
    location: '',
    petImage: '',
    description: ''
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reducerSearchTerm(state, action)
    case SET_SELECT_FILTER:
      return reducerSelectFilter(state, action)
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
    case SET_PET_SIZE:
      return reducerPetSize(state, action)
    case SET_PET_FOUND_DATE:
      return reducerPetFoundDate(state, action)
    case SET_PET_LOCATION:
      return reducerPetLocation(state, action)
    case SET_PET_IMAGE:
      return reducerPetImage(state, action)
    case SET_PET_DESCRIPTION:
      return reducerPetDescription(state, action)
    default:
      return state
  }
}

const reducerSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const reducerOwnerName = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: action.value,
      email: state.owner.email,
      phoneNumber: state.owner.phoneNumber,
      description: state.owner.description
    }
  })
  return newState
}

const reducerOwnerEmail = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: state.owner.name,
      email: action.value,
      phoneNumber: state.owner.phoneNumber,
      description: state.owner.description
    }
  })
  return newState
}

const reducerOwnerPhoneNumber = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: state.owner.name,
      email: state.owner.email,
      phoneNumber: action.value,
      description: state.owner.description
    }
  })
  return newState
}

const reducerDescription = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: state.owner.name,
      email: state.owner.email,
      phoneNumber: state.owner.phoneNumber,
      description: action.value
    }
  })
  return newState
}

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

const reducerSelectFilter = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {selectFilter: action.value})
  return newState
}

const reducerActivePage = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {activePage: action.value, pets: pageItems(action.value, state.pageSize, pets)})
  return newState
}

const pageItems = (pageNumber, pageSize, pets) => {
  const lowerLimit = pageSize * (pageNumber - 1)
  const upperLimit = pageSize * (pageNumber - 1) + pageSize
  return pets.slice(lowerLimit, upperLimit)
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
      size: state.pet.size,
      foundDate: state.pet.foundDate,
      location: state.pet.location,
      petImage: state.pet.petImage,
      description: state.pet.description
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    },
    setSelectFilter (selectFilter) {
      dispatch({type: SET_SELECT_FILTER, value: selectFilter})
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
    },
    setPetFounderEmail (petFounderEmail) {
      dispatch({type: SET_PET_FOUNDER_EMAIL, value: petFounderEmail})
    },
    setPetType (petType) {
      dispatch({type: SET_PET_TYPE, value: petType})
    },
    setPetSize (petSize) {
      dispatch({type: SET_PET_SIZE, value: petSize})
    },
    setPetFoundDate (petFoundDate) {
      dispatch({type: SET_PET_FOUND_DATE, value: petFoundDate})
    },
    setPetLocation (petLocation) {
      dispatch({type: SET_PET_LOCATION, value: petLocation})
    },
    setPetImage (petImage) {
      dispatch({type: SET_PET_IMAGE, value: petImage})
    },
    setPetDescription (petDescription) {
      dispatch({type: SET_PET_DESCRIPTION, value: petDescription})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
