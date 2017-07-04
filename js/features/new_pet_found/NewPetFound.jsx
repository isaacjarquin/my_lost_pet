import 'whatwg-fetch'
import Dropzone from 'react-dropzone'
import request from 'superagent'

import DatePicker from 'react-datepicker'
import moment from 'moment'

const React = require('react')
const Alerts = require('../alerts/alerts')
const DogLoader = require('../dog_loader/DogLoader')
const $ = require('jquery')
const ValidationError = require('../validations/error')

var MediaQuery = require('react-responsive')

if (process.env.WEBPACK_BUILD) {
  require('./newPetFound.scss')
}

const clearForm = (props) => {
  props.setPetDescription('')
  props.setPetFounderName('')
  props.setPetFounderEmail('')
  props.setPetType('')
  props.setBreed('')
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
      visible: 'displayTrue',
      contactUs: 'displayNone',
      newPetFound: 'displayTrue'
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
      message: 'Los datos del animal no se han podido guardar correctamente debido a un error con servicios externos. Estamos trabajando para solucionar el problema lo antes posible por lo que te pedimos por favor volver a intentalo de nuevo más tarde y si el problema aun persiste vualva a intentarlo al día siguiente. Gracias por tu paciencia y disculpe las molestias.',
      visible: 'displayTrue',
      contactUs: 'displayNone',
      newPetFound: 'displayTrue'
    }
  }

  props.setAlerts(alertData)

  setTimeout(() => {
    clearAlert(props)
  }, 25000)
}

const isSuccessfulResponse = response => {
  return !!['400', '401', '403', '404', '405', '405', '408', '409', '410'].includes('')
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
    this.handleBreed = this.handleBreed.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleComunidadesFilter = this.handleComunidadesFilter.bind(this)
    this.handleProvincesFilter = this.handleProvincesFilter.bind(this)

    this.state = { startDate: moment() }
    this.props.setPetFoundDate(moment().format('YYYY-MM-DD'))
  }

  handleChange (date) {
    this.setState({ startDate: date })

    this.props.setPetFoundDate(moment(date).format('YYYY-MM-DD'))
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
  handleBreed (event) {
    this.props.setBreed(event.target.value)
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

  hasMissingValues () {
    return [
      this.props.autonomousComunity,
      this.props.founderName,
      this.props.founderEmail,
      this.props.petType,
      this.props.breed,
      this.props.size,
      this.props.location,
      this.props.description
    ].includes('') || !this.props.images[0]
  }

  handleSubmit (event) {
    if (this.hasMissingValues()) {
      this.props.setValidations(this.props)
    } else {
      $('#details-button').addClass('disable-button')
      $('.loader-container').show()

      let upload = request.post(this.props.cloudinary.upload_url)
                          .field('upload_preset', this.props.cloudinary.upload_preset)
                          .field('file', this.props.images[0])

      upload.end((err, response) => {
        if (err) {
          $('#details-button').removeClass('disable-button')
          $('.loader-container').hide()
          showUnSuccesfullMessage(this.props, err)
        }

        if (response.body.secure_url !== '') {
          this.sendDetails(response.body)
        }
      })
    }

    event.preventDefault()
  }

  sendDetails ({secure_url}) {
    const adaptedItem = {
      name: this.props.founderName,
      email: this.props.founderEmail,
      kind: this.props.petType,
      breed: this.props.breed,
      size: this.props.size,
      date: this.props.foundDate,
      autonomous_comunity: this.props.autonomousComunity,
      province: this.props.province,
      location: this.props.location,
      info: this.props.description,
      image: secure_url
    }

    const headers = { 'Content-Type': 'application/json' }
    const props = this.props

    fetch(props.items_api + '/api/items', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ item: adaptedItem })
    }).then(function (response) {
      $('#details-button').removeClass('disable-button')
      $('.loader-container').hide()
      if (isSuccessfulResponse(response)) {
        clearForm(props)
        closePanel()
        showSuccesfullMessage(props)
      } else {
        showUnSuccesfullMessage(props, response.status)
      }

    }).catch(function (err) {
      $('#details-button').removeClass('disable-button')
      $('.loader-container').hide()
      showUnSuccesfullMessage(props, err)
    })
  }

  onOpenClick () {
    this.dropzone.open()
  }

  render () {
    return (
      <div className='new-pet-form'>
        <button data-toggle='collapse' data-target='#new-pet' className='large-button w3-padding-large'> ¿ Encontraste una mascota perdida ?</button>
        <div className={this.props.alert.newPetFound} ><Alerts {...this.props.alert} /></div>
        <header id='new-pet' className='missing-pet-form collapse w3-container w3-center w3-padding w3-light-grey'>
          <p className='title form-introduction'>Introduce los datos de la mascota y los datos necesarios para poder contactar contigo</p>
          <form onSubmit={this.handleSubmit}>
            <p><input value={this.props.founderName} onChange={this.handleFounderName} className={`w3-input w3-border ${this.props.inputColor.founderName}`} type='text' placeholder='Nombre' /></p>
            <ValidationError message='El campo nombre es obligatorio' field={this.props.validations.founderName} />

            <p><input value={this.props.founderEmail} onChange={this.handleFounderEmail} className={`w3-input w3-border ${this.props.inputColor.founderEmail}`} type='email' placeholder='e-mail' /></p>
            <ValidationError message='El campo email es obligatorio' field={this.props.validations.founderEmail} />

            <p><input value={this.props.petType} onChange={this.handlePetType} className={`w3-input w3-border ${this.props.inputColor.petType}`} type='text' placeholder='Tipo de mascota (perro/gato ...)' /></p>
            <ValidationError message='El campo tipo de mascota es obligatorio' field={this.props.validations.petType} />

            <p><input value={this.props.breed} onChange={this.handleBreed} className={`w3-input w3-border ${this.props.inputColor.breed}`} type='text' placeholder='Raza (pitbul, pastor aleman ...)' /></p>
            <ValidationError message='El campo raza es obligatorio' field={this.props.validations.breed} />

            <p><input value={this.props.size} onChange={this.handlePetSize} className={`w3-input w3-border ${this.props.inputColor.size}`} type='text' placeholder='Tamaño (grande/mediano/pequeno)' /></p>
            <ValidationError message='El campo tamaño es obligatorio' field={this.props.validations.size} />

            <MediaQuery maxDeviceWidth={1200}>
              <p><input value={this.props.foundDate} onChange={this.handleFoundDate} className='w3-input w3-border' type='date' placeholder='fecha (25-08-2016)' /></p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1200}>
              <DatePicker dateFormat='DD-MM-YYYY' selected={this.state.startDate} onChange={this.handleChange} className='w3-input w3-border' />
            </MediaQuery>

            <select className={`form-control landing-select-filter ${this.props.inputColor.autonomousComunity}`} onChange={this.handleComunidadesFilter}>
              <option selected='selected' disabled>Comunidad Autónoma</option>
              <option value='default-value' key={0} />
              {this.props.comunidades.map((option) => (
                <option value={option.value} key={option.id}>{option.value}</option>
              ))}
            </select>
            <ValidationError message='Debes seleccionar una Comunidad Autónoma' field={this.props.validations.autonomousComunity} />

            <select className='form-control landing-select-filter' onChange={this.handleProvincesFilter}>
              <option selected='selected' disabled>Provincia</option>
              <option value='default-value' key={0} />
              {this.props.provincias.map((option) => (
                <option value={option.value} key={option.id}>{option.value}</option>
              ))}
            </select>

            <p><input value={this.props.location} onChange={this.handlePetLocation} className={`w3-input w3-border ${this.props.inputColor.location}`} type='text' placeholder='Ciudad/Municipio' /></p>
            <ValidationError message='El campo Ciudad/Municipio es oblidatorio' field={this.props.validations.location} />

            <p><textarea value={this.props.description} onChange={this.handlePetDescription} className={`w3-input w3-border ${this.props.inputColor.description}`} placeholder='Información sobre la mascota' /></p>
            <ValidationError message='El campo Descripción es oblidatorio' field={this.props.validations.description} />

            <div className={'panel panel-default ' + this.props.validationBackground}>
              <div className='panel-heading'>
                <h4 className='panel-title w3-center'>
                  <a data-toggle='collapse' data-parent='#accordion' href='#dropzone'>
                    {this.props.encloseImageTitle}</a>
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
                        maxSize={1048576}
                        onDrop={this.onImageDrop}>
                        <p>Arrastra la imagen o haz click para selectionarla. La imagen tiene que ser siempre inferior a 1 Mbytes</p>
                      </Dropzone>
                    </div>
                    <div className='image-preview'>
                      {this.props.images.length > 0 ? <div>
                        <h4 className='title'>Imagen Adjuntada</h4>
                        <img className='image' src={this.props.images[0].preview} />
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

const { object, func, string, arrayOf } = React.PropTypes

NewPetFound.propTypes = {
  pet: object,
  alert: object,
  setPetFounderName: func,
  setPetFounderEmail: func,
  setPetType: func,
  setPetSize: func,
  setPetFoundDate: func,
  setPetLocation: func,
  setPetDescription: func,
  setImages: func,
  setAutonomousComunity: func,
  setProvincias: func,
  setProvince: func,
  setImageUrl: string.isRequired,
  founderName: string.isRequired,
  founderEmail: string.isRequired,
  petType: string.isRequired,
  size: string.isRequired,
  foundDate: string.isRequired,
  location: string.isRequired,
  description: string.isRequired,
  images: arrayOf(object).isRequired,
  setEncloseImageTitle: func.isRequired,
  setValidationBackground: func.isRequired,
  validationBackground: string.isRequired,
  encloseImageTitle: string.isRequired,
  setBreed: func.isRequired,
  cloudinary: object,
  comunidades: arrayOf(string),
  provincias: arrayOf(string),
  autonomousComunity: string,
  province: string,
  breed: string,
  setValidations: func,
  inputColor: object,
  validations: object
}

module.exports = NewPetFound
