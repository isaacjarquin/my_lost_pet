const React = require('react')
const Alerts = require('../alerts/alerts')
const $ = require('jquery')

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

  setTimeout(() => {
    clearAlert(props)
    closePanel(props)
    clearForm(props)
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
      message: 'no se han podido guar sus datos de contacto correctamente debido a un error con servicios externos. Estamos trabajando para solucionar el problema lo antes posible por lo que te pedimos por favor volver a intentalo de nuevo mas tarde y si el problema aun persiste vualve a intentarlo al dia siguiente. Gracias por tu paciencia y disculpas las molestias.',
      visible: 'displayTrue'
    }
  }

  props.setAlerts(alertData)
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
  }

  handleName (event) {
    this.props.setOwnerName(event.target.value)
  }
  handleEmail (event) {
    this.props.setOwnerEmail(event.target.value)
  }
  handlePhoneNumber (event) {
    this.props.setOwnerPhoneNumber(event.target.value)
  }
  handleDescription (event) {
    this.props.setDescription(event.target.value)
  }

  handleSubmit (event) {
    const headers = { 'Content-Type': 'application/json' }
    const props = this.props

    const contactDetailsDecoreted = {
      name: props.name,
      email: props.email,
      phone_number: props.phoneNumber,
      details: props.description,
      item_id: props.id
    }

    fetch('https://items-api.herokuapp.com/api/contact_details', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ contact_detail: contactDetailsDecoreted })
    }).then(function (response) {
      showSuccesfullMessage(props)
      console.log(response)
    }).catch(function (err) {
      showUnSuccesfullMessage(props, err)
      console.log(err)
    })

    event.preventDefault()
  }

  renderPanel () {
    if (this.props.id !== undefined) {
      return (
        <div id={this.props.id} className='collapse contact-details-panel'>
          <div className={this.props.arrow} />
          <Alerts {...this.props.alert} />
          <div className='w3-margin'>
            <div className='w3-container w3-padding w3-opacity'>
              <h2>Introduce tus datos de contacto</h2>
            </div>
            <div className='w3-container'>
              <p className='form-introduction w3-opacity'>Introduce tus datos para poder ponerte en contacto con la persona que esta a cargo de tu mascota.</p>
              <form onSubmit={this.handleSubmit}>
                <p><input value={this.props.name} onChange={this.handleName} className='w3-input w3-border' type='text' placeholder='Nombre' /></p>
                <p><input value={this.props.email} onChange={this.handleEmail} className='w3-input w3-border' type='email' placeholder='e-mail' /></p>
                <p><input value={this.props.phoneNumber} onChange={this.handlePhoneNumber} className='w3-input w3-border' type='text' placeholder='Numero de telefono' /></p>
                <p><textarea value={this.props.description} onChange={this.handleDescription} className='w3-input w3-border' placeholder='Información personal' /></p>
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
