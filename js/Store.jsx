const redux = require('redux')
const reactRedux = require('react-redux')

const {
  reducerPetFounderName,
  reducerPetFounderEmail,
  reducerPetType,
  reducerPetSize,
  reducerPetFoundDate,
  reducerPetLocation,
  reducerPetImages,
  reducerPetDescription
} = require('../js/features/new_pet_found/newPetFoundReducer')

const {
  reducerOwnerName,
  reducerOwnerEmail,
  reducerOwnerPhoneNumber,
  reducerDescription
} = require('../js/pages/search/ownerReducer')

const {
  reducerSearchTerm,
  reducerSelectFilter
} = require('../js/features/header/searchFilterReducer')

const {
  reducerContactUsName,
  reducerContactUsEmail,
  reducerContactUsMessage
} = require('../js/features/contact_us/contactUsReducer')

const { reducerActivePage } = require('../js/pages/search/paginationReducer')
const reducerAlerts = require('../js/features/alerts/alertsReducer')

const initialState = require('./InitialState')

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
const SET_IMAGES = 'setImages'
const SET_PET_DESCRIPTION = 'setPetDescription'
const SET_CONTACT_US_NAME = 'setContactUsName'
const SET_CONTACT_US_EMAIL = 'setContactUsEmail'
const SET_CONTACT_US_MESSAGE = 'setContactUsMessage'
const SET_ALERTS = 'setAlerts'
const SET_PETS = 'setPets'
const SET_ACTIVE_PAGE_PETS = 'setActivePagePets'

const reducerPets = (state, action) => {
  const newState = {}

  Object.assign(newState, state, {
    pets: action.value,
    totalNumberOfPets: action.value.length
  })

  return newState
}

const reducerActivePagePets = (state, action) => {
  const newState = {}

  Object.assign(newState, state, { activePagePets: action.value })

  return newState
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
    setImages (images) {
      dispatch({type: SET_IMAGES, value: images})
    },
    setPetDescription (petDescription) {
      dispatch({type: SET_PET_DESCRIPTION, value: petDescription})
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
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
