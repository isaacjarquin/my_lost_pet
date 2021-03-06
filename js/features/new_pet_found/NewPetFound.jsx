import 'whatwg-fetch'
import Dropzone from 'react-dropzone'
import request from 'superagent'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import MapLocationSearchInput from '../map_location_search_input/MapLocationSearchInput'

const React = require('react')
const Alerts = require('../alerts/alerts')
const DogLoader = require('../dog_loader/DogLoader')
const $ = require('jquery')
const ValidationError = require('../validations/error')

import GoogleMapReact from 'google-map-react';

var MediaQuery = require('react-responsive')

if (process.env.WEBPACK_BUILD) {
  require('./newPetFound.scss')
}

const clearForm = (props) => {
  props.setPetDescription('')
  props.setPetFounderName('')
  props.setPetFounderEmail('')
  props.setPetType('')
  props.setPetStatus('')
  props.setBreed('')
  props.setPetSize('')
  props.setPetFoundDate('')
  props.setPetLocation('')
  props.setPetDescription('')
  props.setImages([])
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
  }, 25000)
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
  return [200, 201, 202, 203, 204].includes(response.status)
}

const Marker = ({ icon }) => <div>{icon}</div>;

import IoIosPaw from 'react-icons/lib/io/ios-paw';

class NewPetFound extends React.Component {
  constructor (props) {
    super(props)
    this.handleFounderName = this.handleFounderName.bind(this)
    this.handleFounderEmail = this.handleFounderEmail.bind(this)
    this.handlePetType = this.handlePetType.bind(this)
    this.handlePetStatus = this.handlePetStatus.bind(this)
    this.handlePetSize = this.handlePetSize.bind(this)
    this.handleFoundDate = this.handleFoundDate.bind(this)
    this.handlePetLocation = this.handlePetLocation.bind(this)
    this.handlePetDescription = this.handlePetDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onImageDrop = this.onImageDrop.bind(this)
    this.onOpenClick = this.onOpenClick.bind(this)
    this.handleBreed = this.handleBreed.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleComunidadesFilter = this.handleComunidadesFilter.bind(this)
    this.handleProvincesFilter = this.handleProvincesFilter.bind(this)
    this.handleLocationInput = this.handleLocationInput.bind(this)

    this.state = {
      startDate: moment(),
      markers: [],
      map: {
        lat: 40.4167754,
        lng: -3.7037901999999576,
        zoom: 5
      }
    }
    this.props.setPetFoundDate(moment().format('YYYY-MM-DD'))
  }

  handleLocationInput(marker) {
    this.setState({
      markers: [marker],
      map: {
        lat: marker.lat,
        lng: marker.lng,
        zoom: 12
      }
    })
  }

  onGoogleMapLoad({ props: { map } }) {
    this._map = map;
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
  handlePetStatus(event) {
    this.props.setPetStatus(event.target.value)
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

  handlePetLocation(address, latLng) {
    this.props.setPetLocation(address, latLng)
  }
  handlePetDescription (event) {
    this.props.setPetDescription(event.target.value)
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
      this.props.founderName,
      this.props.founderEmail,
      this.props.petType,
      this.props.petStatus,
      this.props.breed,
      this.props.size,
      this.props.location,
      this.props.description
    ].includes('') || !this.props.images[0]
  }

  handleCloudinaryError (error) {
    $('#details-button').removeClass('disable-button')
    $('.loader-container').hide()
    showUnSuccesfullMessage(this.props, error)
  }
  handleSubmit (event) {
    if (this.hasMissingValues()) {
      this.props.setValidations(this.props)
    } else {
      $('#details-button').addClass('disable-button')
      $('.loader-container').show()
      $('.progress-bar_percentage').removeClass('displayNone')

      new Promise((resolve, reject) => {
        const props = this.props
        request.post(this.props.cloudinary.upload_url)
          .field('upload_preset', this.props.cloudinary.upload_preset)
          .field('file', this.props.images[0])
          .on('progress', function (e) {
            props.setProgressBarPercentage(Math.trunc(e.percent))
          })
          .end((err, response) => {
            resolve(response.body)
            reject(err)
          })
      }).then((cloudinaryResponse) => {
        this.sendDetails(cloudinaryResponse)
      }).catch((cloudinaryError) => {
        this.handleCloudinaryError(cloudinaryError)
      })
    }

    event.preventDefault()
  }

  sendDetails ({secure_url}) {
    const adaptedItem = {
      name: this.props.founderName,
      email: this.props.founderEmail,
      kind: this.props.petType,
      status: this.props.petStatus,
      breed: this.props.breed,
      size: this.props.size,
      date: this.props.foundDate,
      location: this.props.location,
      latitud: this.props.latitud,
      longitud: this.props.longitud,
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
    const petTypesOptions = [
      {type: 'perro', id: 1},
      {type: 'gato', id: 2},
      {type: 'conejo', id: 3},
      {type: 'hamster', id: 4},
      {type: 'iguana', id: 5},
      { type: 'hurón', id: 6},
      {type: 'tortuga', id: 7}
    ]

    const petStatusOptions = [
      { text: 'Buscando casa', value: 'adoption', id: 1 },
      { text: 'Encontrado', value: 'found', id: 2 },
      { text: 'Perdido', value: 'lost', id: 3 }
    ]

    return (
      <div className='new-pet-form'>
        <header id='new-pet' className='missing-pet-form collapse in w3-container w3-center w3-padding'>
          <div className={this.props.alert.newPetFound} ><Alerts {...this.props.alert} /></div>
          <p className='title form-introduction'>Datos de la mascota</p>
          <form onSubmit={this.handleSubmit}>
            <select className={`form-control landing-select-filter ${this.props.inputColor.petType}`} onChange={this.handlePetType}>
              <option selected='selected' disabled>Tipo de mascota</option>
              {petTypesOptions.map((option) => (
                <option value={option.type} key={option.id}>{option.type}</option>
              ))}
            </select>
            <ValidationError message='El campo tipo de mascota es obligatorio' field={this.props.validations.petType} />

            <select className={`form-control landing-select-filter ${this.props.inputColor.petStatus}`} onChange={this.handlePetStatus}>
              <option selected='selected' disabled>Estado de la mascota</option>
              {petStatusOptions.map((option) => (
                <option value={option.value} key={option.id}>{option.text}</option>
              ))}
            </select>
            <ValidationError message='El campo estado de la mascota es obligatorio' field={this.props.validations.petStatus} />

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

            <MapLocationSearchInput
              handleLocationInput={this.handleLocationInput}
              handlePetLocation={this.handlePetLocation}
            />
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
                        maxSize={1024 * 1024 * 5}
                        onDrop={this.onImageDrop}>
                        <p>Arrastra la imagen o haz click para selectionarla. La imagen tiene que ser siempre inferior a 2 Mbytes</p>
                        <div className='image-drop-area-space' />
                      </Dropzone>
                    </div>
                    <div className='image-preview'>
                      {this.props.images.length > 0 ? <div>
                        <img className='image' src={this.props.images[0].preview} />
                      </div> : null}
                    </div>
                  </div>
                </div>
                <div className='arrow-down'></div>
              </div>
            </div>
            
            <div className="contact-details">
              <p className='title form-introduction'>Datos de contacto</p>
              <p><input value={this.props.founderName} onChange={this.handleFounderName} className={`w3-input w3-border ${this.props.inputColor.founderName}`} type='text' placeholder='Nombre' /></p>
              <ValidationError message='El campo nombre es obligatorio' field={this.props.validations.founderName} />

              <p><input value={this.props.founderEmail} onChange={this.handleFounderEmail} className={`w3-input w3-border ${this.props.inputColor.founderEmail}`} type='email' placeholder='e-mail' /></p>
              <ValidationError message='El campo email es obligatorio' field={this.props.validations.founderEmail} />
            </div>

            <p><button onSubmit={this.handleSubmit} id='details-button' className='missing-pet-button w3-btn-block w3-padding w3-padding-12 w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' id='button-icon' /> Guardar datos</button></p>
            <DogLoader percentage={this.props.percentage} />
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
  petStatus: string.isRequired,
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
