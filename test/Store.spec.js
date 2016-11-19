/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Navbar = require('../js/features/header/Navbar')
const { shallow, mount } = require('enzyme')
const { rootReducer } = require('../js/Store')
const { pets } = require('../public/mockData')
const { Provider } = require('react-redux')

describe('Store', () => {
  const initialState = {
    searchTerm: '',
    selectFilter: '',
    activePage: 1,
    pageSize: 9,
    totalNumberOfPets: pets.length,
    pets: pets.slice(0, 9)
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
      "breading": "Persa",
      "city": "Santa Cruz de Tenerife",
      "description": "found it in Los Cristianos Tenerife yesterday at 3pm",
      "happyAtHome": "true",
      "id": "10",
      "image": "/public/pets-background.png",
      "location": "Los cristianos",
      "pet": "cat",
      "size": "medium"
    }

    expect(state).to.deep.equal({activePage: 2, pageSize: 9, pets: [lastPet]})
  })
})
