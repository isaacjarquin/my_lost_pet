const React = require('react')
const Alerts = require('../alerts/alerts')
const $ = require('jquery')
const ValidationError = require('../validations/error')
const DogLoader = require('../dog_loader/DogLoader')

var MediaQuery = require('react-responsive')

if (process.env.WEBPACK_BUILD) {
  require('./contactUs.scss')
}

const showUnSuccesfullMessage = (props, err) => {
  const alertData = {
    alert: {
      type: 'alert-danger',
      message: 'No se han podido enviar sus datos de contacto correctamente debido a un error con servicios externos. Estamos trabajando para solucionar el problema lo antes posible por lo que te pedimos por favor volver a intentalo de nuevo mas tarde y si el problema aun persiste vualve a intentarlo al dia siguiente. Gracias por tu paciencia y disculpa las molestias.',
      visible: 'displayTrue',
      contactUs: 'displayTrue',
      newPetFound: 'displayNone'
    }
  }

  props.setAlerts(alertData)

  setTimeout(() => {
    clearAlert(props)
  }, 25000)
}

const showSuccesfullMessage = (props) => {
  const alertData = {
    alert: {
      type: 'alert-success',
      message: 'Sus datos de contacto se han guardado correctamente. Nos pondremos en contacto con usted lo antes posible. Gracias por usar nuestra web.',
      visible: 'displayTrue',
      contactUs: 'displayTrue',
      newPetFound: 'displayNone'
    }
  }

  props.setAlerts(alertData)
  clearForm(props)

  setTimeout(() => {
    clearAlert(props)
    closePanel()
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

const closePanel = () => {
  setTimeout(() => { $('#collapse2').removeClass('in') }, 100)
}

const clearForm = (props) => {
  props.setContactUsName('')
  props.setContactUsEmail('')
  props.setContactUsMessage('')
}

const isSuccessfulResponse = response => {
  return !!['400', '401', '403', '404', '405', '405', '408', '409', '410'].includes('')
}

class ContactUs extends React.Component {
  constructor (props) {
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      nameValidationMessage: 'displayNone',
      emailValidationMessage: 'displayNone',
      messageValidationMessage: 'displayNone',
      nameInputColor: '',
      emailInputColor: '',
      messageInputColor: ''
    }
  }

  handleName (event) {
    this.props.setContactUsName(event.target.value)
    this.setState({nameValidationMessage: 'displayNone', nameInputColor: ''})
  }
  handleEmail (event) {
    this.props.setContactUsEmail(event.target.value)
    this.setState({emailValidationMessage: 'displayNone', emailInputColor: ''})
  }
  handleMessage (event) {
    this.props.setContactUsMessage(event.target.value)
    this.setState({messageValidationMessage: 'displayNone', messageInputColor: ''})
  }
  hasMissingValues () {
    return [
      this.props.name,
      this.props.email,
      this.props.message
    ].includes('')
  }
  setValidations ({name, email, message}) {
    if (name === '') {
      this.setState({nameValidationMessage: 'displayTrue', nameInputColor: 'fields-color'})
    }

    if (email === '') {
      this.setState({emailValidationMessage: 'displayTrue', emailInputColor: 'fields-color'})
    }

    if (message === '') {
      this.setState({messageValidationMessage: 'displayTrue', messageInputColor: 'fields-color'})
    }
  }
  handleSubmit (event) {
    if (this.hasMissingValues()) {
      this.setValidations(this.props)
    } else {
      $('.loader-container').show()
      const headers = { 'Content-Type': 'application/json' }
      const props = this.props

      const contactUsDecoreted = {
        name: props.name,
        email: props.email,
        details: props.message
      }

      fetch(props.items_api + '/api/contact_us', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ contact_us: contactUsDecoreted })
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
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h4 className='panel-title w3-center'>
            <a data-toggle='collapse' data-parent='#accordion' href='#collapse2'>
            Contacto</a>
          </h4>
        </div>
        <div className={this.props.alert.contactUs} ><Alerts {...this.props.alert} /></div>
        <div id='collapse2' className='panel-collapse collapse w3-padding'>
          <div className='panel-body'>
            <MediaQuery maxDeviceWidth={736}>
              <div>
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle w3-grey' w3-grey data-toggle='collapse' data-target='#contactUsNavbar'>
                    <span className='icon-bar w3-white' />
                    <span className='icon-bar w3-white' />
                    <span className='icon-bar w3-white' />
                  </button>
                </div>
                <div className='collapse navbar-collapse contact-us-mobile-details' id='contactUsNavbar'>
                  <ul className='nav navbar-nav navbar-right contact-us'>
                    <li><i className='fa fa-map-marker fa-fw w3-large w3-margin' /> Las Palmas de Gran Canaria</li>
                    <li><i className='fa fa-envelope fa-fw w3-large w3-margin' /> Email: myfoundpet@mail.com</li>
                  </ul>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={768}>
              <div className='w3-section w3-center w3-opacity'>
                <i className='fa fa-map-marker fa-fw w3-xxlarge w3-margin' /> Las Palmas de Gran Canaria, España
                <i className='fa fa-envelope fa-fw w3-xxlarge w3-margin' /> Email: myfoundpet@mail.com
              </div>
            </MediaQuery>
            <form onSubmit={this.handleSubmit}>
              <p><input value={this.props.name} onChange={this.handleName} className={`w3-input w3-border ${this.state.nameInputColor}`} type='text' placeholder='Nombre' /></p>
              <ValidationError message='El campo nombre es obligatorio' field={this.state.nameValidationMessage} />

              <p><input value={this.props.email} onChange={this.handleEmail} className={`w3-input w3-border ${this.state.emailInputColor}`} type='email' placeholder='e-mail' /></p>
              <ValidationError message='El campo email es obligatorio' field={this.state.emailValidationMessage} />

              <p><textarea value={this.props.message} onChange={this.handleMessage} className={`w3-input w3-border ${this.state.messageInputColor}`} placeholder='Descríbenos la información que necesitas' /></p>
              <ValidationError message='Este campo es necesario para ayudarnos a enternder tus dudas' field={this.state.messageValidationMessage} />

              <DogLoader />
              <button type='submit' className='w3-btn-block w3-padding-12 w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' /> Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const { object, func, string } = React.PropTypes

ContactUs.propTypes = {
  contactUs: object,
  alert: object,
  name: string,
  email: string,
  message: string,
  setContactUsName: func,
  setContactUsEmail: func,
  setContactUsMessage: func,
  sendContactUsDetails: func
}

module.exports = ContactUs
