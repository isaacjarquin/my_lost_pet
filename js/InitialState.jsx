module.exports = {
  searchTerm: '',
  selectFilter: '',
  activePage: 1,
  pageSize: 6,
  totalNumberOfPets: 0,
  pets: [],
  activePagePets: [],
  filteredPets: [],
  encloseImageTitle: 'Adjuntar imagen',
  validationBackground: '',
  filters: {
    location: "",
    petType: ""
  },
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
    breed: '',
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
