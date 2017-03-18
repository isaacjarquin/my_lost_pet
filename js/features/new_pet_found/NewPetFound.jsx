const React = require('react')
const { connector } = require('../../Store')
const Alerts = require('../alerts/alerts')
const DogLoader = require('./dog-loader')

import 'whatwg-fetch'
import Dropzone from 'react-dropzone'
import request from 'superagent'

const $ = require('jquery')

const CLOUDINARY_UPLOAD_PRESET = 'ak0f1cnm'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/my-lost-pet/image/upload'

if (process.env.WEBPACK_BUILD) {
  require('./newPetFound.scss')
}

const clearForm = (props) => {
  props.setPetDescription('')
  props.setPetFounderName('')
  props.setPetFounderEmail('')
  props.setPetType('')
  props.setPetSize('')
  props.setPetFoundDate('')
  props.setPetLocation('')
  props.setPetDescription('')
  props.setImages([])
}

const closePanel = () => {
  setTimeout(() => { $('#new-pet').removeClass('in') }, 100)
}

const clearAlert = (props) => {
  const alertData = {
    alert: {
      type: '',
      message: '',
      visible: 'displayNone'
    }
  }

  props.setAlerts(alertData)
}

const showSuccesfullMessage = (props) => {
  const alertData = {
    alert: {
      type: 'alert-success',
      message: 'Los datos del animal se han guardado correctamente',
      visible: 'displayTrue'
    }
  }

  props.setAlerts(alertData)

  setTimeout(() => {
    clearAlert(props)
  }, 8000)
}

const showUnSuccesfullMessage = (props, err) => {
  const alertData = {
    alert: {
      type: 'alert-danger',
      message: 'Los datos del animal no se han guardado correctamente debido a un error con servicios externos. Estamos trabajando para solucionar el problema lo antes posible por lo que te pedimos por favor volver a intentalo de nuevo mas tarde y si el problema aun persiste vualve a intentarlo al dia siguiente. Gracias por tu paciencia y disculpas las molestias.',
      visible: 'displayTrue'
    }
  }

  props.setAlerts(alertData)
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
    this.handleImageUrl = this.handleImageUrl.bind(this)
    this.handleImages = this.handleImages.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onImageDrop = this.onImageDrop.bind(this)
    this.onOpenClick = this.onOpenClick.bind(this)
  }

  onImageDrop (acceptedFiles) {
    this.props.setImages(acceptedFiles)
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
  handleImageUrl (event) {
    this.props.setImageUrl(event.target.value)
  }
  handleImages (event) {
    this.props.setImages(event.target.value)
  }
  handleSubmit (event) {
    $('#details-button').addClass('disable-button')
    $('.loader-container').show()

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', this.props.pet.images[0])

    upload.end((err, response) => {
      if (err) {
        $('#details-button').removeClass('disable-button')
        $('.loader-container').hide()
        showUnSuccesfullMessage(this.props, err)
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.sendDetails(response.body)
      }
    })

    event.preventDefault()
  }

  sendDetails ({secure_url}) {
    const adaptedItem = {
      name: this.props.pet.founderName,
      email: this.props.pet.founderEmail,
      kind: this.props.pet.petType,
      size: this.props.pet.size,
      date: this.props.pet.foundDate,
      location: this.props.pet.location,
      info: this.props.pet.description,
      image: secure_url
    }

    const headers = { 'Content-Type': 'application/json' }
    const props = this.props

    fetch('http://localhost:4000/api/items', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ item: adaptedItem })
    }).then(function (response) {
      $('#details-button').removeClass('disable-button')
      $('.loader-container').hide()

      clearForm(props)
      closePanel()
      showSuccesfullMessage(props)

      console.log(response)
    }).catch(function (err) {
      $('#details-button').removeClass('disable-button')
      $('.loader-container').hide()

      showUnSuccesfullMessage(props, err)
      console.log(err)
    })
  }

  onOpenClick () {
    this.dropzone.open()
  }

  render () {
    return (
      <div className='new-pet-form'>
        <button data-toggle='collapse' data-target='#new-pet' className='large-button w3-padding-large w3-large'> ¿ Acabas de encontrarte una mascota perdida en la calle ?</button>
        <Alerts />
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
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h4 className='panel-title w3-center'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#dropzone'>
                  Adjuntar imagen</a>
                </h4>
              </div>
              <div id='dropzone' className='panel-collapse collapse'>
                <div className='panel-body'>
                  <div className='drop-zone'>
                    <div className='images-drop'>
                      <Dropzone
                        className='image-drop-zone'
                        multiple={false}
                        accept='image/*'
                        ref={(node) => { this.dropzone = node }}
                        onDrop={this.onImageDrop}>
                        <p>Arrastra la imagen o haz click para selectionarla.</p>
                      </Dropzone>
                    </div>
                    <div className='image-preview'>
                      {this.props.pet.images.length > 0 ? <div>
                        <h4 className='title'>Uploading files...</h4>
                        <img className='image' src={this.props.pet.images[0].preview} />
                      </div> : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DogLoader />
            <p><button onSubmit={this.handleSubmit} id='details-button' className='w3-btn-block w3-padding w3-padding-12 w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' id='button-icon' /> ENVIAR MENSAJE</button></p>
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
  setPetDescription: func
}

module.exports = connector(NewPetFound)
