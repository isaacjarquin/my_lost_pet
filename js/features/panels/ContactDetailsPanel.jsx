const React = require('react')
const Alerts = require('../alerts/alerts')
const $ = require('jquery')
const ValidationError = require('../validations/error')
const DogLoader = require('../dog_loader/DogLoader')

if (process.env.WEBPACK_BUILD) {
  require('./contactDetailsPanel.scss')
}

const clearForm = (props) => {
  props.setOwnerName('')
  props.setOwnerEmail('')
  props.setOwnerPhoneNumber('')
  props.setDescription('')
}

const closePanel = ({colSizeClass}) => {
  $(colSizeClass).removeClass('addOpacity')
  $(colSizeClass).removeClass('panel-opened')
  $('.contact-details-panel').removeClass('in')
  $('.contact-btn').removeAttr('disabled')
  $('.more-info_link').removeClass('disable-link')
}

const showSuccesfullMessage = (props) => {
  const alertData = {
    alert: {
      type: 'alert-success',
      message: 'Sus datos de contacto se han guardado correctamente. Le hemos enviado un correo a la persona que ha encontrado su perro para que se ponga en contacto con usted lo antes posible.',
      visible: 'displayTrue'
    }
  }

  props.setAlerts(alertData)
  clearForm(props)

  setTimeout(() => {
    clearAlert(props)
    closePanel(props)
  }, 8000)
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

const showUnSuccesfullMessage = (props, err) => {
  const alertData = {
    alert: {
      type: 'alert-danger',
      message: 'No se han podido guardar sus datos de contacto correctamente debido a un error con servicios externos. Estamos trabajando para solucionar el problema lo antes posible por lo que le pedimos por favor volver a intentalo de nuevo más tarde y si el problema aun persiste vualva a intentarlo al dia siguiente. Gracias por tu paciencia y disculpa las molestias.',
      visible: 'displayTrue'
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

class ContactDetailsPanel extends React.Component {
  constructor (props) {
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderPanel = this.renderPanel.bind(this)

    this.state = {
      nameValidationMessage: 'displayNone',
      emailValidationMessage: 'displayNone',
      phoneNumberValidationMessage: 'displayNone',
      descriptionValidationMessage: 'displayNone',
      nameInputColor: '',
      emailInputColor: '',
      phoneNumberInputColor: '',
      descriptionInputColor: ''
    }
  }

  handleName (event) {
    this.props.setOwnerName(event.target.value)
    this.setState({nameValidationMessage: 'displayNone', nameInputColor: ''})
  }
  handleEmail (event) {
    this.props.setOwnerEmail(event.target.value)
    this.setState({emailValidationMessage: 'displayNone', emailInputColor: ''})
  }
  handlePhoneNumber (event) {
    this.props.setOwnerPhoneNumber(event.target.value)
    this.setState({phoneNumberValidationMessage: 'displayNone', phoneNumberInputColor: ''})
  }
  handleDescription (event) {
    this.props.setDescription(event.target.value)
    this.setState({descriptionValidationMessage: 'displayNone', descriptionInputColor: ''})
  }
  hasMissingValues () {
    return [
      this.props.name,
      this.props.email,
      this.props.phoneNumber,
      this.props.description
    ].includes('')
  }
  setValidations ({name, email, phoneNumber, description}) {
    if (name === '') {
      this.setState({nameValidationMessage: 'displayTrue', nameInputColor: 'fields-color'})
    }

    if (email === '') {
      this.setState({emailValidationMessage: 'displayTrue', emailInputColor: 'fields-color'})
    }

    if (phoneNumber === '') {
      this.setState({phoneNumberValidationMessage: 'displayTrue', phoneNumberInputColor: 'fields-color'})
    }

    if (description === '') {
      this.setState({descriptionValidationMessage: 'displayTrue', descriptionInputColor: 'fields-color'})
    }
  }
  handleSubmit (event) {
    if (this.hasMissingValues()) {
      this.setValidations(this.props)
    } else {
      $('.loader-container').show()
      const headers = { 'Content-Type': 'application/json' }
      const props = this.props

      const contactDetailsDecoreted = {
        name: props.name,
        email: props.email,
        phone_number: props.phoneNumber,
        details: props.description,
        item_id: props.id
      }

      fetch(props.items_api + '/api/contact_details', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ contact_detail: contactDetailsDecoreted })
      }).then(function (response) {
        $('.loader-container').hide()

        if (isSuccessfulResponse(response)) {
          showSuccesfullMessage(props)
        } else {
          showUnSuccesfullMessage(props, response.status)
        }
      }).catch(function (err) {
        $('.loader-container').hide()
        showUnSuccesfullMessage(props, err)
      })
    }

    event.preventDefault()
  }

  renderPanel () {
    if (this.props.id !== undefined) {
      return (
        <div id={this.props.id} className='collapse contact-details-panel'>
          <div className={this.props.arrow} />
          <Alerts {...this.props.alert} />
          <div>
            <div className='w3-container w3-padding w3-opacity'>
              <h2>Introduce tus datos de contacto</h2>
            </div>
            <div className='w3-container'>
              <p className='form-introduction w3-opacity'>Introduce tus datos para poder ponerte en contacto con la persona que está a cargo de tu mascota.</p>
              <form onSubmit={this.handleSubmit}>
                <p><input value={this.props.name} onChange={this.handleName} className={`w3-input w3-border ${this.state.nameInputColor}`} type='text' placeholder='Nombre' /></p>
                <ValidationError message='El campo nombre es obligatorio' field={this.state.nameValidationMessage} />

                <p><input value={this.props.email} onChange={this.handleEmail} className={`w3-input w3-border ${this.state.emailInputColor}`} type='email' placeholder='e-mail' /></p>
                <ValidationError message='El campo email es obligatorio' field={this.state.emailValidationMessage} />

                <p><input value={this.props.phoneNumber} onChange={this.handlePhoneNumber} className={`w3-input w3-border ${this.state.phoneNumberInputColor}`} type='text' placeholder='Número de teléfono' /></p>
                <ValidationError message='El campo número de teléfono es obligatorio' field={this.state.phoneNumberValidationMessage} />

                <p><textarea value={this.props.description} onChange={this.handleDescription} className={`w3-input w3-border ${this.state.descriptionInputColor}`} placeholder='Información personal' /></p>
                <ValidationError message='El campo descripción es obligatorio' field={this.state.descriptionValidationMessage} />
                <DogLoader />
                <p><button className='w3-btn-block w3-padding-12 w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' /> Enviar mis datos</button></p>
              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  render () {
    return (this.renderPanel())
  }
}

const { string, object, func } = React.PropTypes

ContactDetailsPanel.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  phoneNumber: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
  arrow: string.isRequired,
  alert: object,
  setOwnerName: func,
  setOwnerEmail: func,
  setOwnerPhoneNumber: func,
  setDescription: func,
  sendOwnersDetails: func
}

module.exports = ContactDetailsPanel
