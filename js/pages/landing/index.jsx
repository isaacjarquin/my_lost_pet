const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('../../Store')
const Dropdown = require('../../features/dropdown/Dropdown')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
    this.handleFounderName = this.handleFounderName.bind(this)
    this.handleFounderEmail = this.handleFounderEmail.bind(this)
    this.handlePetType = this.handlePetType.bind(this)
    this.handlePetSize = this.handlePetSize.bind(this)
    this.handleFoundDate = this.handleFoundDate.bind(this)
    this.handlePetLocation = this.handlePetLocation.bind(this)
    this.handlePetDescription = this.handlePetDescription.bind(this)
    this.handlePetImage = this.handlePetImage.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  handleFounderName (event) {
    this.props.setPetFounderName(event.target.value)
  }
  handleFounderEmail (event) {
    this.props.setPetFounderEmail(event.target.value)
  }
  handlePetType (event) {
    this.props.setPetType(event.target.value)
  }
  handlePetSize (event) {
    this.props.setPetSize(event.target.value)
  }
  handleFoundDate (event) {
    this.props.setPetFoundDate(event.target.value)
  }
  handlePetLocation (event) {
    this.props.setPetLocation(event.target.value)
  }
  handlePetDescription (event) {
    this.props.setPetDescription(event.target.value)
  }
  handlePetImage (event) {
    this.props.setPetImage(event.target.value)
  }
  render () {
    const petTypes = [{pet: 'dog', id: 1}, {pet: 'cat', id: 2}, {pet: 'rabit', id: 3}]

    return (
      <div className='home-info'>
        <ul className='w3-navbar w3-black w3-hide-small'>
          <li className='w3-left'><a href='#'>Home<i /></a></li>
          <li className='w3-left' data-toggle='collapse' data-target='#about-us'><a href='#'>About us<i /></a></li>
          <li className='w3-right'><a href='#'><i className='fa fa-facebook-official' /></a></li>
          <li className='w3-right'><a href='#'><i className='fa fa-twitter' /></a></li>
        </ul>
        <header className='w3-display-container w3-wide' id='home'>
          <img className='w3-image' src='../../../public/mascotas_y_personas.jpg' alt='Fashion Blog' width='1600' height='1060' />

          <div className='w3-display-left w3-padding-xlarge'>
            <div className='small-nav-menu'>
              <ul className='w3-navbar w3-black w3-hide-small small-nav-menu'>
                <li className='active'><a href='#'>Perdidos</a></li>
                <li><a href='#'>Buscando casa</a></li>
              </ul>
            </div>

            <h1 className='w3-jumbo w3-text-white w3-hide-small'><b>My lost pet</b></h1>

            <div className='lost'>
              <h1 className='w3-text-white'>Encuentralo con nosotros</h1>
              <form onSubmit={this.gotoSearch}>
                <p><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='w3-input w3-border' type='text' placeholder='Encontrado en' /></p>
                <Dropdown dropDownTypes={petTypes} dropDownTitle={'Pet type '} />
              </form>
              <Link to='/search'><h6><button className='w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6></Link>
            </div>

            <div className='looking-for-home'>
              <h1 className='w3-text-white'>Dale un hogar</h1>
              <form onSubmit={this.gotoSearch}>
                <p><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='w3-input w3-border' type='text' placeholder='Actualmente en' /></p>
                <Dropdown dropDownTypes={petTypes} dropDownTitle={'Pet type '} />
              </form>
              <Link to='/search'><h6><button className='w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6></Link>
            </div>

          </div>
        </header>

        <button data-toggle='collapse' data-target='#new-pet' className='large-button w3-padding-large w3-large'>Acabas de encontrarte una mascota perdida en la calle ?</button>

        <header id='about-us' className='collapse w3-container w3-center w3-padding-48 w3-light-grey'>
          <h1 className='w3-xxxlarge'><b>About us</b></h1>
          <h6>Te ayudamos a buscarlo, porque el haria lo mismo por ti</h6>
        </header>

        <header id='new-pet' className='missing-pet-form collapse w3-container w3-center w3-padding w3-light-grey'>
          <p className='title form-introduction'>Introduce datos de la mascota y los datos necesarios para poder contactar contigo</p>
          <form onSubmit={this.handleSubmit}>
            <p><input value={this.props.pet.founderName} onChange={this.handleFounderName} className='w3-input w3-border' type='text' placeholder='Nombre' /></p>
            <p><input value={this.props.pet.founderEmail} onChange={this.handleFounderEmail} className='w3-input w3-border' type='email' placeholder='e-mail' /></p>
            <p><input value={this.props.pet.petType} onChange={this.handlePetType} className='w3-input w3-border' type='text' placeholder='Typo de mascota (perro/gato ...)' /></p>
            <p><input value={this.props.pet.size} onChange={this.handlePetSize} className='w3-input w3-border' type='text' placeholder='Tamano (grande/mediano/pequeno)' /></p>
            <p><input value={this.props.pet.foundDate} onChange={this.handleFoundDate} className='w3-input w3-border' type='date' placeholder='fecha (25-08-2016)' /></p>
            <p><input value={this.props.pet.location} onChange={this.handlePetLocation} className='w3-input w3-border' type='text' placeholder='Encontrada en ciudad, localidad' /></p>
            <p><textarea value={this.props.pet.description} onChange={this.handlePetDescription} className='w3-input w3-border' placeholder='Imformacion sobre la mascota' /></p>
            <input value={this.props.pet.petImage} onChange={this.handlePetImage} className='file-input w3-padding w3-white w3-border' type='file' name='Anadir foto' />
            <p><button className='w3-btn-block w3-padding w3-green w3-opacity w3-hover-opacity-off'>Enviar mis datos</button></p>
          </form>
        </header>

        <footer className='w3-container w3-grey w3-center w3-padding-xlarge'>
          <p>Copyright <a href='http://www.w3schools.com/w3css/default.asp' target='_blank'>@mylostpet</a></p>
        </footer>
      </div>
    )
  }
}

const { func, string, object } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func,
  pet: object,
  setPetFounderName: func,
  setPetFounderEmail: func,
  setPetType: func,
  setPetSize: func,
  setPetFoundDate: func,
  setPetLocation: func,
  setPetDescription: func,
  setPetImage: func
}

module.exports = connector(Landing)
