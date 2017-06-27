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
  comunidades: [],
  provincias: [],
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
  social: {
    facebook: '',
    twitter: ''
  },
  urls: {
    host: '',
    items_api: ''
  },
  cloudinary: {
    upload_preset: '',
    upload_url: ''
  },
  filters: {
    location: '',
    petType: '',
    autonomousComunity: '',
    province: ''
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
    autonomousComunity: '',
    province: '',
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
