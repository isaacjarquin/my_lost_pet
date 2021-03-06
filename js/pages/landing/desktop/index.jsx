const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('../../../Store')
const Dropdown = require('../../../features/dropdown/Dropdown')
const TermsAndConditions = require('../../../features/terms_and_conditions/termsAndConditions')
const ContactUs = require('../../../features/contact_us/contactUs')
const AboutUs = require('../../../features/about_us/aboutUs')
const HowToUseTheApp = require('../../../features/how_to_use_the_app/howToUseTheApp')
const Footer = require('../../../features/footer/Footer')
const NewPetFound = require('../../../features/new_pet_found/NewPetFound')
const TopNavigationBar = require('../../../features/navigation/topNavigationBar')
const $ = require('jquery')
var MediaQuery = require('react-responsive')
const SideBarNavigation = require('../../../features/navigation/sideBarNavigation')
const LandingSection = require('../../../layouts/LandingSection')

import FaPaw from 'react-icons/lib/fa/paw';

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

class Desktop extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.handlePetTypeFilter = this.handlePetTypeFilter.bind(this)
    this.handlePetStatusFilter = this.handlePetStatusFilter.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      iconColor: 'white',
      statusColor: ''
    }
  }
  getIconColor(petStatus) {
    const colors = {
      lost: "orange",
      found: "yellowgreen",
      adoption: "dodgerblue"
    }

    return colors[petStatus];
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  handlePetTypeFilter (event) {
    this.props.setPetTypeFilter(event.target.value)
    localStorage.setItem('petType', event.target.value);
  }
  handlePetStatusFilter(event) {
    this.setState({
      iconColor: this.getIconColor(event.target.value),
      statusColor: event.target.value
    })
    this.props.setPetStatusFilter(event.target.value)
    localStorage.setItem('petStatus', event.target.value);
  }
  handleSubmit (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  componentDidMount () {
    const props = this.props

    $.ajax({
      url: '/api/envs',
      cache: true,
      type: 'GET',
      success: function (response) { props.setEnvs(JSON.parse(response)) },
      error: function (xhr) { console.log(xhr) }
    })
  }
  render () {
    const petTypesOptions = [
      {type: 'perro', id: 1},
      {type: 'gato', id: 2},
      {type: 'conejo', id: 3},
      {type: 'hamster', id: 4},
      {type: 'iguana', id: 5},
      {type: 'hurón', id: 6},
      {type: 'tortuga', id: 7}
    ]
    const petStatusOptions = [
      { text: 'Buscando casa', value: 'adoption', id: 1 },
      { text: 'Encontrado', value: 'found', id: 2 },
      { text: 'Perdido', value: 'lost', id: 3 }
    ]

    const url = this.props.urls.host

    return (
      <div className='home-info landing-top-section'>
        <TopNavigationBar {...this.props.social} hostUrl={url} />

        <div className="landing-image" id='home'>
          <h1 className='main-title w3-jumbo w3-hide-small'><b>My lost pet</b></h1>
          <SideBarNavigation />
          <div className='pet-filter w3-padding-medium'>
            <div className='small-nav-menu displayNone'>
              <ul className='w3-navbar w3-black w3-hide-small small-nav-menu'>
                <li className='active'><a href='#'>Perdidos</a></li>
                <li><a href='#'>Buscando casa</a></li>
              </ul>
            </div>
            <div className='lost'>
              <MediaQuery minDeviceWidth={768}>
                <div className="landing-select-filter-title w3-center">
                  <h1 className={`${this.state.statusColor}-status w3-text-white form-title`}>
                    <FaPaw size={35} color={this.state.iconColor}/>
                    Encuéntralo con nosotros
                  </h1>
                </div>
              </MediaQuery>
              <form onSubmit={this.handleSubmit}>
                <select className='form-control landing-select-filter' onChange={this.handlePetTypeFilter}>
                  <option selected='selected' disabled>Tipo de mascota</option>
                  {petTypesOptions.map((option) => (
                    <option value={option.type} key={option.id}>{option.type}</option>
                  ))}
                </select>
                <select className='form-control landing-select-filter' onChange={this.handlePetStatusFilter}>
                  <option selected='selected' disabled>Estado de la mascota</option>
                  {petStatusOptions.map((option) => (
                    <option value={option.value} key={option.id}>{option.text}</option>
                  ))}
                </select>
              </form>
              <Link to='/search'>
                <h6 className="landing-select-filter-button">
                  <button className={`${this.state.statusColor} w3-btn find-a-pet-button w3-padding-medium w3-large w3-hover-opacity-off`}>Buscar</button>
                </h6>
              </Link>
            </div>
          </div>
        </div>

        <LandingSection title={"Añade algunos datos sobre la mascota"} target={"add-pet-section"} >
          <NewPetFound
            {...this.props.pet}
            alert={this.props.alert}
            comunidades={this.props.comunidades}
            provincias={this.props.provincias}
            setAutonomousComunity={this.props.setAutonomousComunity}
            setValidations={this.props.setValidations}
            setProvince={this.props.setProvince}
            setProvincias={this.props.setProvincias}
            setPetFounderName={this.props.setPetFounderName}
            setPetFounderEmail={this.props.setPetFounderEmail}
            setPetType={this.props.setPetType}
            setPetStatus={this.props.setPetStatus}
            setBreed={this.props.setBreed}
            setPetSize={this.props.setPetSize}
            setPetFoundDate={this.props.setPetFoundDate}
            setPetLocation={this.props.setPetLocation}
            setPetDescription={this.props.setPetDescription}
            setImageUrl={this.props.setImageUrl}
            setImages={this.props.setImages}
            setAlerts={this.props.setAlerts}
            encloseImageTitle={this.props.encloseImageTitle}
            validationBackground={this.props.validationBackground}
            setEncloseImageTitle={this.props.setEncloseImageTitle}
            setValidationBackground={this.props.setValidationBackground}
            cloudinary={this.props.cloudinary}
            items_api={this.props.urls.items_api}
            validations={this.props.validations.newPetFound}
            inputColor={this.props.inputColor.newPetFound}
            setProgressBarPercentage={this.props.setProgressBarPercentage}
            percentage={this.props.percentage}
          />
        </LandingSection>

        <LandingSection title={"¿Quiénes somos?"} target={"about-us-section"}>
          <AboutUs />
        </LandingSection>

        <LandingSection title={"Como usar la aplicación"} target={"how-to-use-section"}>
          <HowToUseTheApp />
        </LandingSection>

        <LandingSection title={"Contactar"} target={"contact-section"}>
            <ContactUs
              {...this.props.contactUs}
              alert={this.props.alert}
              setAlerts={this.props.setAlerts}
              setContactUsName={this.props.setContactUsName}
              setContactUsEmail={this.props.setContactUsEmail}
              setContactUsMessage={this.props.setContactUsMessage}
              items_api={this.props.urls.items_api}
            />
        </LandingSection>

        <LandingSection title={"Aviso legal"} target={"terms-and-condition-section"}>
          <TermsAndConditions />
        </LandingSection>

        <Footer />
      </div>
    )
  }
}

const { func, string, object, arrayOf } = React.PropTypes

Desktop.propTypes = {
  searchTerm: string,
  setSearchTerm: func,
  pet: object,
  pets: arrayOf(object),
  setPetFounderName: func,
  setPetFounderEmail: func,
  setPetType: func,
  setPetStatus: func,
  setPetSize: func,
  setPetFoundDate: func,
  setPetLocation: func,
  setPetDescription: func,
  setImageUrl: func,
  contactUs: object,
  alert: object,
  setContactUsName: func,
  setContactUsEmail: func,
  setContactUsMessage: func,
  setAlerts: func,
  setSelectFilter: func,
  setImages: func,
  setProvincias: func,
  setProvince: func,
  encloseImageTitle: string,
  validationBackground: string,
  setEncloseImageTitle: func,
  setValidationBackground: func,
  setLocationFilter: func,
  setPetTypeFilter: func,
  setProvinceFilter: func,
  setAutonomousComunity: func,
  setBreed: func,
  urls: object,
  social: object,
  locationFilter: string,
  setAutonomousComunityFilter: func,
  comunidades: arrayOf(string),
  provincias: arrayOf(string),
  setValidations: func,
  validations: object,
  inputColor: object,
  cloudinary: object
}

module.exports = connector(Desktop)
