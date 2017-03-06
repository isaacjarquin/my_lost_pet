const { pets } = require('../public/mockData')

module.exports = {
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
    description: '',
    extraDescription: '',
    extraDescriptionHidden: '',
    showExtraInfo: false
  },
  contactUs: {
    name: '',
    email: '',
    message: ''
  },
  alert: {
    type: '',
    message: '',
    visible: 'displayNone'
  }
}
