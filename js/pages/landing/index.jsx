const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('../../Store')
const Dropdown = require('../../features/dropdown/Dropdown')
const TermsAndConditions = require('../../features/terms_and_conditions/termsAndConditions')
const ContactUs = require('../../features/contact_us/contactUs')
const AboutUs = require('../../features/about_us/aboutUs')
const Footer = require('../../features/footer/Footer')
const NewPetFound = require('../../features/new_pet_found/NewPetFound')
const TopNavigationBar = require('../../features/navigation/topNavigationBar')
const $ = require('jquery')
var MediaQuery = require('react-responsive')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.handleLocationFilter = this.handleLocationFilter.bind(this)
    this.handlePetTypeFilter = this.handlePetTypeFilter.bind(this)
    this.handleComunidadesFilter = this.handleComunidadesFilter.bind(this)
    this.handleProvincesFilter = this.handleProvincesFilter.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  handleLocationFilter (event) {
    this.props.setLocationFilter(event.target.value)
  }
  handlePetTypeFilter (event) {
    this.props.setPetTypeFilter(event.target.value)
  }
  handleComunidadesFilter (event) {
    this.props.setAutonomousComunity(event.target.value)

    this.props.comunidades.map((comunidad) => {
      if (comunidad.value === event.target.value) {
        this.props.setProvincias(comunidad.provincias)
      }
    })
  }
  handleProvincesFilter (event) {
    this.props.setProvince(event.target.value)
  }
  handleSubmit (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  componentDidMount () {
    const props = this.props
    let comunidades = []

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
  render () {
    const petTypesOptions = [{type: 'perro', id: 1}, {type: 'gato', id: 2}, {type: 'conejo', id: 3}]
    const dropDownOptions = [{value: 'perro', id: 1}, {value: 'gato', id: 2}, {value: 'conejo', id: 3}]
    const url = this.props.urls.host

    return (
      <div className='home-info'>
        <TopNavigationBar {...this.props.social} hostUrl={url} />
        <header className='w3-display-container w3-wide' id='home'>
          <img className='w3-image' src='../../../public/mascotas_y_personas.jpg' alt='Fashion Blog' width='1600' height='1060' />

          <div className='pet-filter w3-display-left w3-padding-medium'>
            <div className='small-nav-menu'>
              <ul className='w3-navbar w3-black w3-hide-small small-nav-menu'>
                <li className='active'><a href='#'>Perdidos</a></li>
                <li><a href='#'>Buscando casa</a></li>
              </ul>
            </div>

            <h1 className='w3-jumbo w3-text-white w3-hide-small'><b>My lost pet</b></h1>

            <div className='lost'>
              <MediaQuery maxDeviceWidth={736}>
                <h3 className='w3-text-white'>Encuentralo con nosotros</h3>
              </MediaQuery>
              <MediaQuery minDeviceWidth={768}>
                <h1 className='w3-text-white'>Encuentralo con nosotros</h1>
              </MediaQuery>
              <form onSubmit={this.handleSubmit}>
                <p><input value={this.props.locationFilter} onChange={this.handleLocationFilter} className='w3-input w3-border' type='text' placeholder='Encontrado en' /></p>

                <select className='form-control' onChange={this.handleComunidadesFilter}>
                  <option disabled>Comunidades Autónomas</option>
                  <option value='default-value' key={0} />
                  {this.props.comunidades.map((option) => (
                    <option value={option.value} key={option.id}>{option.value}</option>
                  ))}
                </select>

                <select className='form-control' onChange={this.handleProvincesFilter}>
                  <option disabled>Provincias</option>
                  <option value='default-value' key={0} />
                  {this.props.provincias.map((option) => (
                    <option value={option.value} key={option.id}>{option.value}</option>
                  ))}
                </select>

                <select className='form-control' onChange={this.handlePetTypeFilter}>
                  <option disabled>Tipo de mascota</option>
                  <option value='default-value' key={0} />
                  {petTypesOptions.map((option) => (
                    <option value={option.type} key={option.id}>{option.type}</option>
                  ))}
                </select>
              </form>
              <Link to='/search'>
                <h6><button className='w3-btn w3-white w3-padding-medium w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6>
              </Link>
            </div>

            <div className='looking-for-home'>
              <h1 className='w3-text-white'>Dale un hogar</h1>
              <form>
                <p><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='w3-input w3-border' type='text' placeholder='Actualmente en' /></p>
                <Dropdown
                  dropDownOptions={dropDownOptions}
                  dropDownTitle={'tipo de mascota'}
                  setSelectFilter={this.props.setSelectFilter}
                  />
              </form>
              <Link to='/search'><h6><button className='w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6></Link>
            </div>

          </div>
        </header>
        <NewPetFound
          {...this.props.pet}
          alert={this.props.alert}
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
          />

        <div className='panel-group w3-opacity w3-medium' id='accordion'>
          <AboutUs />
          <ContactUs
            {...this.props.contactUs}
            alert={this.props.alert}
            setAlerts={this.props.setAlerts}
            setContactUsName={this.props.setContactUsName}
            setContactUsEmail={this.props.setContactUsEmail}
            setContactUsMessage={this.props.setContactUsMessage}
            items_api={this.props.urls.items_api}
            />
          <TermsAndConditions />
        </div>

        <Footer />
      </div>
    )
  }
}

const { func, string, object, arrayOf } = React.PropTypes

Landing.propTypes = {
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
  encloseImageTitle: string,
  validationBackground: string,
  setEncloseImageTitle: func,
  setValidationBackground: func,
  setLocationFilter: func,
  setPetTypeFilter: func,
  setBreed: func,
  urls: object,
  social: object,
  locationFilter: string,
  cloudinary: object
}

module.exports = connector(Landing)
