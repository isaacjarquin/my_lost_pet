const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('../../../Store')
const Dropdown = require('../../../features/dropdown/Dropdown')
const TermsAndConditionsMobile = require('../../../features/terms_and_conditions/termsAndConditionsMobile')
const ContactUsMobile = require('../../../features/contact_us/contactUsMobile')
const AboutUsMobile = require('../../../features/about_us/aboutUsMobile')
const HowToUseTheAppMobile = require('../../../features/how_to_use_the_app/howToUseTheAppMobile')
const Footer = require('../../../features/footer/Footer')
const NewPetFoundMobile = require('../../../features/new_pet_found/NewPetFoundMobile')
const TopNavigationBar = require('../../../features/navigation/topNavigationBar')
const $ = require('jquery')
var MediaQuery = require('react-responsive')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

class Mobile extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.handlePetTypeFilter = this.handlePetTypeFilter.bind(this)
    this.handleComunidadesFilter = this.handleComunidadesFilter.bind(this)
    this.handleProvincesFilter = this.handleProvincesFilter.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSearchTermEvent(event) {
    this.props.setSearchTerm(event.target.value)
  }
  handlePetTypeFilter(event) {
    this.props.setPetTypeFilter(event.target.value)
  }
  handleComunidadesFilter(event) {
    this.props.setAutonomousComunityFilter(event.target.value)

    this.props.comunidades.map((comunidad) => {
      if (comunidad.value === event.target.value) {
        this.props.setProvincias(comunidad.provincias)
      }
    })
  }
  handleProvincesFilter(event) {
    this.props.setProvinceFilter(event.target.value)
  }
  handleSubmit(event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  componentDidMount() {
    const props = this.props

    const imageWidth = $(".app-container").height() - 140
    $(".brand-image").height(imageWidth)

    $.ajax({
      url: '/api/envs',
      cache: true,
      type: 'GET',
      success: function (response) { props.setEnvs(JSON.parse(response)) },
      error: function (xhr) { console.log(xhr) }
    })

    $.ajax({
      url: '/api/comunidades',
      cache: true,
      type: 'GET',
      success: function (response) {
        props.setComunidades(JSON.parse(response))
      },
      error: function (xhr) { console.log(xhr) }
    })
  }
  render() {
    const petTypesOptions = [
      { type: 'perro', id: 1 },
      { type: 'gato', id: 2 },
      { type: 'conejo', id: 3 },
      { type: 'hamster', id: 4 },
      { type: 'iguana', id: 5 },
      { type: 'hurón', id: 6 },
      { type: 'tortuga', id: 7 }
    ]
    const dropDownOptions = [
      { value: 'perro', id: 1 },
      { value: 'gato', id: 2 },
      { value: 'conejo', id: 3 },
      { value: 'hamster', id: 4 },
      { value: 'iguana', id: 5 },
      { value: 'hurón', id: 6 },
      { value: 'tortuga', id: 7 }
    ]
    const url = this.props.urls.host

    return (
      <div className='home-info'>
        <TopNavigationBar {...this.props.social} hostUrl={url} />
        <header className='w3-display-container w3-wide' id='home'>
          <img className='w3-image brand-image' src='../../../public/mascotas_y_personas.jpg' alt='Fashion Blog' width='1600' height='1060' />

          <div className='pet-filter w3-display-left w3-padding-medium'>
            <div className='small-nav-menu displayNone'>
              <ul className='w3-navbar w3-black w3-hide-small small-nav-menu'>
                <li className='active'><a href='#'>Perdidos</a></li>
                <li><a href='#'>Buscando casa</a></li>
              </ul>
            </div>

            <h1 className='w3-jumbo w3-text-white w3-hide-small'><b>My lost pet</b></h1>

            <div className='mobile-lost'>
              <h3 className='w3-text-white'>Encuéntralo con nosotros</h3>
              <form onSubmit={this.handleSubmit}>
                <select className='form-control landing-select-filter-mobile' onChange={this.handlePetTypeFilter}>
                  <option selected='selected' disabled>Tipo de mascota</option>
                  {petTypesOptions.map((option) => (
                    <option value={option.type} key={option.id}>{option.type}</option>
                  ))}
                </select>

                <select className='form-control landing-select-filter-mobile' onChange={this.handleComunidadesFilter}>
                  <option selected='selected' disabled>Comunidad Autónoma</option>
                  <option value='default-value' key={0} />
                  {this.props.comunidades.map((option) => (
                    <option value={option.value} key={option.id}>{option.value}</option>
                  ))}
                </select>

                <select className='form-control landing-select-filter-mobile' onChange={this.handleProvincesFilter}>
                  <option selected='selected' disabled>Provincia</option>
                  <option value='default-value' key={0} />
                  {this.props.provincias.map((option) => (
                    <option value={option.value} key={option.id}>{option.value}</option>
                  ))}
                </select>
              </form>
              <Link to='/search'>
                <h6><button className='landing-button-mobile w3-btn w3-white w3-padding-medium w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6>
              </Link>
            </div>
          </div>
        </header>

        <NewPetFoundMobile
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

        <div className='panel-group w3-opacity w3-medium' id='accordion'>
          <AboutUsMobile />
          <HowToUseTheAppMobile />
          <ContactUsMobile
            {...this.props.contactUs}
            alert={this.props.alert}
            setAlerts={this.props.setAlerts}
            setContactUsName={this.props.setContactUsName}
            setContactUsEmail={this.props.setContactUsEmail}
            setContactUsMessage={this.props.setContactUsMessage}
            items_api={this.props.urls.items_api}
          />
          <TermsAndConditionsMobile />
        </div>

        <Footer />
      </div>
    )
  }
}

const { func, string, object, arrayOf } = React.PropTypes

Mobile.propTypes = {
  searchTerm: string,
  setSearchTerm: func,
  pet: object,
  pets: arrayOf(object),
  setPetFounderName: func,
  setPetFounderEmail: func,
  setPetType: func,
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

module.exports = connector(Mobile)

