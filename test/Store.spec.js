/* eslint-env mocha */

const { expect } = require('chai')
const { rootReducer } = require('../js/Store')
const { pets } = require('../public/mockData')

describe('Store', () => {
  const initialState = {
    searchTerm: '',
    selectFilter: '',
    activePage: 1,
    encloseImageTitle: 'Adjuntar imagen',
    validationBackground: '',
    cloudinary: {
      upload_preset: '',
      upload_url: ''
    },
    urls: {
      host: '',
      items_api: ''
    },
    filters: {
      location: '',
      autonomousComunity: '',
      province: '',
      petType: ''
    },
    'social': {
      'facebook': '',
      'twitter': ''
    },
    owner: {
      description: '',
      email: '',
      name: '',
      phoneNumber: ''
    },
    validations: {
      newPetFound: {
        autonomousComunity: 'displayNone',
        founderName: 'displayNone',
        founderEmail: 'displayNone',
        petType: 'displayNone',
        breed: 'displayNone',
        size: 'displayNone',
        location: 'displayNone',
        description: 'displayNone'
      }
    },
    inputColor: {
      newPetFound: {
        autonomousComunity: '',
        founderName: '',
        founderEmail: '',
        petType: '',
        breed: '',
        size: '',
        location: '',
        description: ''
      }
    },
    pet: {
      founderName: '',
      founderEmail: '',
      petType: '',
      breed: '',
      size: '',
      foundDate: '',
      autonomousComunity: '',
      province: '',
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
    filteredPets: [],
    provincias: [],
    comunidades: []
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

  it('should handle setBreed actions', () => {
    const state = rootReducer({pet: {breed: 'non breed'}}, {type: 'setBreed', value: 'some breed'})

    expect(state.pet.breed).to.deep.equal('some breed')
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

  it('should handle province actions', () => {
    const state = rootReducer({pet: {province: 'dont care'}}, {type: 'setProvince', value: 'I do care a lot'})

    expect(state.pet.province).to.deep.equal('I do care a lot')
  })

  it('should handle autonomousComunity actions', () => {
    const state = rootReducer({pet: {autonomousComunity: 'dont care'}}, {type: 'setAutonomousComunity', value: 'I do care a lot'})

    expect(state.pet.autonomousComunity).to.deep.equal('I do care a lot')
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

  it('should handle setFilteredPets actions', () => {
    const filteredPets = [pets[0], pets[1]]
    const state = rootReducer({filteredPets: 'dont care'}, {type: 'setFilteredPets', value: filteredPets})

    expect(state.filteredPets).to.deep.equal(filteredPets)
  })

  it('should handle setTotalNumberOfPets actions', () => {
    const state = rootReducer({totalNumberOfPets: 0}, {type: 'setTotalNumberOfPets', value: pets})

    expect(state.totalNumberOfPets).to.deep.equal(7)
  })

  it('should handle setPets actions', () => {
    const state = rootReducer({pets: [], totalNumberOfPets: 0}, {type: 'setPets', value: pets})

    expect(state.totalNumberOfPets).to.deep.equal(7)
    expect(state.pets).to.deep.equal(pets)
  })

  it('should handle setEncloseImageTitle actions', () => {
    const state = rootReducer({encloseImageTitle: ''}, {type: 'setEncloseImageTitle', value: 'title example'})

    expect(state.encloseImageTitle).to.deep.equal('title example')
  })

  it('should handle setValidationBackground actions', () => {
    const state = rootReducer({validationBackground: ''}, {type: 'setValidationBackground', value: 'validation-color'})

    expect(state.validationBackground).to.deep.equal('validation-color')
  })

  it('should handle setLocationFilter actions', () => {
    const state = rootReducer({filters: {location: ''}}, {type: 'setLocationFilter', value: 'some location'})

    expect(state.filters.location).to.deep.equal('some location')
  })

  it('should handle setPetTypeFilter actions', () => {
    const state = rootReducer({filters: {petType: ''}}, {type: 'setPetTypeFilter', value: 'dog'})

    expect(state.filters.petType).to.deep.equal('dog')
  })

  it('should handle setSocialKeys actions', () => {
    const newSocialState = {facebook: '2323424242', twitter: '11111111'}
    const state = rootReducer({facebook: '', twitter: ''}, {type: 'setSocialKeys', value: newSocialState})

    expect(state.social).to.deep.equal(newSocialState)
  })

  it('should handle urls actions', () => {
    const newUrlsState = {host: 'localhost', items_api: '/api/items'}
    const state = rootReducer({host: '', items_api: ''}, {type: 'setUrls', value: newUrlsState})

    expect(state.urls).to.deep.equal(newUrlsState)
  })

  it('should handle cloudinary actions', () => {
    const newCloudinaryState = {upload_preset: '23423254352', upload_url: 'https://test.claudinay.uk'}
    const state = rootReducer({upload_preset: '', upload_url: ''}, {type: 'setCloudinary', value: newCloudinaryState})

    expect(state.cloudinary).to.deep.equal(newCloudinaryState)
  })

  it('should handle setAutonomousComunityFilter actions', () => {
    const state = rootReducer({filters: {autonomousComunity: ''}}, {type: 'setAutonomousComunityFilter', value: 'Canarias'})

    expect(state.filters.autonomousComunity).to.deep.equal('Canarias')
  })

  it('should handle setProvinceFilter actions', () => {
    const state = rootReducer({filters: {province: ''}}, {type: 'setProvinceFilter', value: 'Las Palmas'})

    expect(state.filters.province).to.deep.equal('Las Palmas')
  })

  it('should handle setComunidades actions', () => {
    const state = rootReducer({comunidades: ''}, {type: 'setComunidades', value: ['Canarias', 'Andalucia']})

    expect(state.comunidades).to.deep.equal(['Canarias', 'Andalucia'])
  })

  it('should handle setProvincias actions', () => {
    const state = rootReducer({provincias: ''}, {type: 'setProvincias', value: ['Las Palmas', 'Santa Cruz']})

    expect(state.provincias).to.deep.equal(['Las Palmas', 'Santa Cruz'])
  })

  it('should handle founderName actions', () => {
    const intialStateValues = {
        validations: {
          newPetFound: {
            autonomousComunity: '',
            founderName: '',
            founderEmail: '',
            petType: '',
            breed: '',
            size: '',
            location: '',
            description: ''
          }
        }
      }

      const modifiedState = {
        autonomousComunity: '',
        founderName: 'newValue',
        founderEmail: '',
        petType: '',
        breed: '',
        size: '',
        location: '',
        description: ''
      }

    const state = rootReducer(intialStateValues, {type: 'setFounderNameValidation', value: 'newValue'})

    expect(state.validations.newPetFound).to.deep.equal(modifiedState)
  })

  it('should handle founderEmail actions', () => {
    const intialStateValues = {
        validations: {
          newPetFound: {
            autonomousComunity: '',
            founderName: '',
            founderEmail: '',
            petType: '',
            breed: '',
            size: '',
            location: '',
            description: ''
          }
        }
      }

      const modifiedState = {
        autonomousComunity: '',
        founderName: '',
        founderEmail: 'newValue',
        petType: '',
        breed: '',
        size: '',
        location: '',
        description: ''
      }

    const state = rootReducer(intialStateValues, {type: 'setFounderEmailValidation', value: 'newValue'})

    expect(state.validations.newPetFound).to.deep.equal(modifiedState)
  })

  it('should handle petType actions', () => {
    const intialStateValues = {
        validations: {
          newPetFound: {
            autonomousComunity: '',
            founderName: '',
            founderEmail: '',
            petType: '',
            breed: '',
            size: '',
            location: '',
            description: ''
          }
        }
      }

      const modifiedState = {
        autonomousComunity: '',
        founderName: '',
        founderEmail: '',
        petType: 'newValue',
        breed: '',
        size: '',
        location: '',
        description: ''
      }

    const state = rootReducer(intialStateValues, {type: 'setPetTypeValidation', value: 'newValue'})

    expect(state.validations.newPetFound).to.deep.equal(modifiedState)
  })

  it('should handle breed actions', () => {
    const intialStateValues = {
        validations: {
          newPetFound: {
            autonomousComunity: '',
            founderName: '',
            founderEmail: '',
            petType: '',
            breed: '',
            size: '',
            location: '',
            description: ''
          }
        }
      }

      const modifiedState = {
        autonomousComunity: '',
        founderName: '',
        founderEmail: '',
        petType: '',
        breed: 'newValue',
        size: '',
        location: '',
        description: ''
      }

    const state = rootReducer(intialStateValues, {type: 'setBreedValidation', value: 'newValue'})

    expect(state.validations.newPetFound).to.deep.equal(modifiedState)
  })

  it('should handle size actions', () => {
    const intialStateValues = {
        validations: {
          newPetFound: {
            autonomousComunity: '',
            founderName: '',
            founderEmail: '',
            petType: '',
            breed: '',
            size: '',
            location: '',
            description: ''
          }
        }
      }

      const modifiedState = {
        autonomousComunity: '',
        founderName: '',
        founderEmail: '',
        petType: '',
        breed: '',
        size: 'newValue',
        location: '',
        description: ''
      }

    const state = rootReducer(intialStateValues, {type: 'setSizeValidation', value: 'newValue'})

    expect(state.validations.newPetFound).to.deep.equal(modifiedState)
  })

  it('should handle Location actions', () => {
    const intialStateValues = {
        validations: {
          newPetFound: {
            autonomousComunity: '',
            founderName: '',
            founderEmail: '',
            petType: '',
            breed: '',
            size: '',
            location: '',
            description: ''
          }
        }
      }

      const modifiedState = {
        autonomousComunity: '',
        founderName: '',
        founderEmail: '',
        petType: '',
        breed: '',
        size: '',
        location: 'newValue',
        description: ''
      }

    const state = rootReducer(intialStateValues, {type: 'setLocationValidation', value: 'newValue'})

    expect(state.validations.newPetFound).to.deep.equal(modifiedState)
  })

  it('should handle description actions', () => {
    const intialStateValues = {
        validations: {
          newPetFound: {
            autonomousComunity: '',
            founderName: '',
            founderEmail: '',
            petType: '',
            breed: '',
            size: '',
            location: '',
            description: ''
          }
        }
      }

      const modifiedState = {
        autonomousComunity: '',
        founderName: '',
        founderEmail: '',
        petType: '',
        breed: '',
        size: '',
        location: '',
        description: 'newValue'
      }

    const state = rootReducer(intialStateValues, {type: 'setDescriptionValidation', value: 'newValue'})

    expect(state.validations.newPetFound).to.deep.equal(modifiedState)
  })
})
