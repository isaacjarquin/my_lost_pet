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
      petImage: '',
      description: ''
    },
    pageSize: 6,
    totalNumberOfPets: pets.length,
    pets: pets.slice(0, 6)
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
    const pets = {pets: pets}
    const state = rootReducer({activePage: 1, pets: pets, pageSize: 9}, {type: 'setActivePage', value: 2})
    const lastPet = {
      'breading': 'Persa',
      'city': 'Santa Cruz de Tenerife',
      'date': '25 Abril, 2016',
      'description': 'found it in Los Cristianos Tenerife yesterday at 3pm',
      'happyAtHome': 'true',
      'id': '10',
      'image': '/public/pets-background.png',
      'location': 'Los cristianos',
      'pet': 'cat',
      'size': 'medium',
      'titleDescription': 'En constrado en Las Palmas'
    }

    expect(state).to.deep.equal({activePage: 2, pageSize: 9, pets: [lastPet]})
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
})
