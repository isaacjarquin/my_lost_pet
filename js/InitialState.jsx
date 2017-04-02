module.exports = {
  searchTerm: '',
  selectFilter: '',
  activePage: 1,
  pageSize: 6,
  totalNumberOfPets: 0,
  pets: [],
  activePagePets: [],
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
    images: [],
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
    visible: 'displayNone',
    newPetFound: 'displayNone',
    contactUs: 'displayNone'
  }
}
