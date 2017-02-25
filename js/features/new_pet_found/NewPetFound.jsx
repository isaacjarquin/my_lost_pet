const React = require('react')
const { connector } = require('../../Store')
import 'whatwg-fetch'

if (process.env.WEBPACK_BUILD) {
  require('./newPetFound.scss')
}

class NewPetFound extends React.Component {
  constructor (props) {
    super(props)
    this.handleFounderName = this.handleFounderName.bind(this)
    this.handleFounderEmail = this.handleFounderEmail.bind(this)
    this.handlePetType = this.handlePetType.bind(this)
    this.handlePetSize = this.handlePetSize.bind(this)
    this.handleFoundDate = this.handleFoundDate.bind(this)
    this.handlePetLocation = this.handlePetLocation.bind(this)
    this.handlePetDescription = this.handlePetDescription.bind(this)
    this.handlePetImage = this.handlePetImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
  handleSubmit (event) {
    const adaptedItem = {
      name: this.props.pet.founderName,
      email: this.props.pet.founderEmail,
      kind: this.props.pet.petType,
      size: this.props.pet.size,
      date: this.props.pet.foundDate,
      location: this.props.pet.location,
      info: this.props.pet.description,
      image: this.props.pet.petImage
    }

    const url = process.env.ITEMS_API_URL
    const headers = { 'Content-Type': 'application/json' }
    console.log("*****************")
    console.log(ITEMS_API_URL)
    console.log(TWITTER_KEY)
    console.log(NODE_ENV)
    console.log("*****************")

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ item: adaptedItem })
    }).then(function (response) {
      console.log(response)
    }).catch(function (err) {
      console.log(err)
    })

    event.preventDefault()
  }
  render () {
    return (
      <div className='new-pet-form'>
        <button data-toggle='collapse' data-target='#new-pet' className='large-button w3-padding-large w3-large'> ¿ Acabas de encontrarte una mascota perdida en la calle ?</button>

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
            <p><button onSubmit={this.handleSubmit} className='w3-btn-block w3-padding w3-padding-12 w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' /> ENVIAR MENSAJE</button></p>
          </form>
        </header>
      </div>
    )
  }
}

const { object, func } = React.PropTypes

NewPetFound.propTypes = {
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

module.exports = connector(NewPetFound)
