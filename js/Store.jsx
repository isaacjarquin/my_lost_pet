const redux = require('redux')
const reactRedux = require('react-redux')

const {
  reducerPetFounderName,
  reducerPetFounderEmail,
  reducerPetType,
  reducerBreed,
  reducerPetSize,
  reducerPetFoundDate,
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
  reducerPetTypeFilter
} = require('../js/pages/landing/pageFilters')

const { reducerActivePage } = require('../js/pages/search/paginationReducer')
const reducerAlerts = require('../js/features/alerts/alertsReducer')

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

  Object.assign(newState, state, { social: { facebook: action.value.facebook, twitter:  action.value.twitter}})

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
    social: {
      facebook: state.social.facebook,
      twitter: state.social.twitter
    },
    filters: {
      location: state.filters.location,
      petType: state.filters.petType
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

const getFilteredPets = (searchTerm, pets, selectFilter) => {
  const filteredPets = pets
    .filter((pet) => `${pet.breed}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
    .filter((pet) => `${pet.size}`.toUpperCase().indexOf(selectFilter.toUpperCase()) >= 0)
    .map((pet) => pet)

  return filteredPets
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm, pets, selectFilter, activePage) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
      dispatch({type: SET_FILTERED_PETS, value: getFilteredPets(searchTerm, pets, selectFilter)})
      dispatch({type: SET_ACTIVE_PAGE_PETS, value: getFilteredPets(searchTerm, pets, selectFilter)})
      dispatch({type: SET_TOTAL_NUMBER_OF_PETS, value: getFilteredPets(searchTerm, pets, selectFilter)})
      dispatch({type: SET_ACTIVE_PAGE, value: 1})
    },
    setLocationFilter (location) {
      dispatch({type: SET_LOCATION_FILTER, value: location})
    },
    setPetTypeFilter (petType) {
      dispatch({type: SET_PET_TYPE_FILTER, value: petType})
    },
    setSelectFilter (searchTerm, pets, selectFilter, activePage) {
      dispatch({type: SET_SELECT_FILTER, value: selectFilter})
      dispatch({type: SET_FILTERED_PETS, value: getFilteredPets(searchTerm, pets, selectFilter)})
      dispatch({type: SET_ACTIVE_PAGE_PETS, value: getFilteredPets(searchTerm, pets, selectFilter)})
      dispatch({type: SET_TOTAL_NUMBER_OF_PETS, value: getFilteredPets(searchTerm, pets, selectFilter)})
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
    },
    setPetFounderEmail (petFounderEmail) {
      dispatch({type: SET_PET_FOUNDER_EMAIL, value: petFounderEmail})
    },
    setPetType (petType) {
      dispatch({type: SET_PET_TYPE, value: petType})
    },
    setBreed (breed) {
      dispatch({type: SET_BREED, value: breed})
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
    },
    setFilteredPets (pets) {
      dispatch({type: SET_FILTERED_PETS, value: pets})
    },
    setEncloseImageTitle (message) {
      dispatch({type: SET_ENCLOSE_IMAGE_TITLE, value: message})
    },
    setValidationBackground (validationClass) {
      dispatch({type: SET_VALIDATION_BACKGROUND, value: validationClass})
    },
    setSocialKeys (keyValues) {
      dispatch({type: SET_SOCIAL_KEYS, value: keyValues})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
