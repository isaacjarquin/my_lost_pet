/* eslint-env mocha */

const { expect } = require('chai')
const { rootReducer } = require('../js/Store')
const { pets } = require('../public/mockData')

describe('Store', () => {
  const initialState = {
    searchTerm: '',
    selectFilter: '',
    activePage: 1,
    owner: {
      description: '',
      email: '',
      name: '',
      phoneNumber: ''
    },
    pet: {
      founderName: '',
      founderEmail: '',
      petType: '',
      size: '',
      foundDate: '',
      location: '',
      images: [],
      extraDescription: '',
      extraDescriptionHidden: '',
      showExtraInfo: false,
      description: ''
    },
    contactUs: {
      name: '',
      email: '',
      message: ''
    },
    alert: {
      type: '',
      message: '',
      visible: 'displayNone',
      newPetFound: 'displayNone',
      contactUs: 'displayNone'
    },
    pageSize: 6,
    totalNumberOfPets: 0,
    pets: [],
    activePagePets: [],
    filteredPets: []
  }

  it('should boostrap', () => {
    const state = rootReducer(undefined, {type: '@@redux/INIT'})

    expect(state).to.deep.equal(initialState)
  })

  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({searchTerm: 'dont care'}, {type: 'setSearchTerm', value: 'I do care a lot'})

    expect(state).to.deep.equal({searchTerm: 'I do care a lot'})
  })

  it('should return the current state when the action type doesnt mach anyone', () => {
    const state = rootReducer(undefined, {type: 'unknownAction', value: 'value'})

    expect(state).to.deep.equal(initialState)
  })

  it('should handle selectFilter actions', () => {
    const state = rootReducer({selectFilter: 'previous state'}, {type: 'setSelectFilter', value: 'cat'})

    expect(state).to.deep.equal({selectFilter: 'cat'})
  })

  it('should handle setActivePage actions', () => {
    const state = rootReducer({activePage: 1, filteredPets: pets, pageSize: 6}, {type: 'setActivePage', value: 2})
    const lastPet = {
      'breading': 'Persa',
      'city': 'Santa Cruz de Tenerife',
      'date': '25 Abril, 2016',
      'description': 'found it in Los Cristianos Tenerife yesterday at 3pm',
      'happyAtHome': 'true',
      'id': '7',
      'image': '/public/pets-background.png',
      'location': 'Los cristianos',
      'pet': 'cat',
      'size': 'medium',
      'extraDescription': '',
      'extraDescriptionHidden': '',
      'showExtraInfo': false,
      'titleDescription': 'En constrado en Las Palmas'
    }

    expect(state).to.deep.equal({activePage: 2, pageSize: 6, filteredPets: pets, activePagePets: [lastPet]})
  })

  it('should handle setOwnerName actions', () => {
    const state = rootReducer({owner: {name: 'dont care'}}, {type: 'setOwnerName', value: 'I do care a lot'})

    expect(state.owner.name).to.equal('I do care a lot')
  })

  it('should handle setOwnerEmail actions', () => {
    const state = rootReducer({owner: {email: 'dont care'}}, {type: 'setOwnerEmail', value: 'I do care a lot'})

    expect(state.owner.email).to.deep.equal('I do care a lot')
  })

  it('should handle setOwnerPhoneNumber actions', () => {
    const state = rootReducer({owner: {phoneNumber: 'dont care'}}, {type: 'setOwnerPhoneNumber', value: 'I do care a lot'})

    expect(state.owner.phoneNumber).to.equal('I do care a lot')
  })

  it('should handle setDescription actions', () => {
    const state = rootReducer({owner: {description: 'dont care'}}, {type: 'setDescription', value: 'I do care a lot'})

    expect(state.owner.description).to.deep.equal('I do care a lot')
  })

  it('should handle setPetFounderName actions', () => {
    const state = rootReducer({pet: {founderName: 'dont care'}}, {type: 'setPetFounderName', value: 'I do care a lot'})

    expect(state.pet.founderName).to.deep.equal('I do care a lot')
  })

  it('should handle setPetFounderEmail actions', () => {
    const state = rootReducer({pet: {founderEmail: 'dont care'}}, {type: 'setPetFounderEmail', value: 'I do care a lot'})

    expect(state.pet.founderEmail).to.deep.equal('I do care a lot')
  })

  it('should handle setPetType actions', () => {
    const state = rootReducer({pet: {petType: 'dont care'}}, {type: 'setPetType', value: 'I do care a lot'})

    expect(state.pet.petType).to.deep.equal('I do care a lot')
  })

  it('should handle setPetSize actions', () => {
    const state = rootReducer({pet: {size: 'dont care'}}, {type: 'setPetSize', value: 'I do care a lot'})

    expect(state.pet.size).to.deep.equal('I do care a lot')
  })

  it('should handle setPetFoundDate actions', () => {
    const state = rootReducer({pet: {foundDate: 'dont care'}}, {type: 'setPetFoundDate', value: 'I do care a lot'})

    expect(state.pet.foundDate).to.deep.equal('I do care a lot')
  })

  it('should handle setPetLocation actions', () => {
    const state = rootReducer({pet: {location: 'dont care'}}, {type: 'setPetLocation', value: 'I do care a lot'})

    expect(state.pet.location).to.deep.equal('I do care a lot')
  })

  it('should handle setPetDescription actions', () => {
    const state = rootReducer({pet: {description: 'dont care'}}, {type: 'setPetDescription', value: 'I do care a lot'})

    expect(state.pet.description).to.deep.equal('I do care a lot')
  })

  it('should handle setContactUsName actions', () => {
    const state = rootReducer({contactUs: {name: 'dont care'}}, {type: 'setContactUsName', value: 'I do care a lot'})

    expect(state.contactUs.name).to.deep.equal('I do care a lot')
  })

  it('should handle setContactUsEmail actions', () => {
    const state = rootReducer({contactUs: {email: 'dont care'}}, {type: 'setContactUsEmail', value: 'I do care a lot'})

    expect(state.contactUs.email).to.deep.equal('I do care a lot')
  })

  it('should handle setContactUsMessage actions', () => {
    const state = rootReducer({contactUs: {message: 'dont care'}}, {type: 'setContactUsMessage', value: 'I do care a lot'})

    expect(state.contactUs.message).to.deep.equal('I do care a lot')
  })

  it('should handle setAlerts actions', () => {
    const newState = {alert: {type: 'alert-success', message: 'alert message', visible: 'displayTrue', newPetFound: 'displayNone', contactUs: 'displayNone'}}
    const state = rootReducer({alert: {type: '', message: '', visible: 'displayNone'}}, {type: 'setAlerts', value: newState})

    expect(state.alert).to.deep.equal(newState.alert)
  })

  it('should handle setImages actions', () => {
    const state = rootReducer({pet: {images: []}}, {type: 'setImages', value: ['http://www.example.com']})

    expect(state.pet.images).to.deep.equal(['http://www.example.com'])
  })

  it('should handle setActivePagePets actions', () => {
    const activePets = [pets[0], pets[1]]
    const state = rootReducer({activePagePets: 'dont care'}, {type: 'setActivePagePets', value: activePets})

    expect(state.activePagePets).to.deep.equal(activePets)
  })
})
