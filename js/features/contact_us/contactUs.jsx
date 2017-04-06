const React = require('react')
const Alerts = require('../alerts/alerts')
const $ = require('jquery')

const showUnSuccesfullMessage = (props, err) => {
  const alertData = {
    alert: {
      type: 'alert-danger',
      message: 'no se han podido enviar sus datos de contacto correctamente debido a un error con servicios externos. Estamos trabajando para solucionar el problema lo antes posible por lo que te pedimos por favor volver a intentalo de nuevo mas tarde y si el problema aun persiste vualve a intentarlo al dia siguiente. Gracias por tu paciencia y disculpas las molestias.',
      visible: 'displayTrue',
      contactUs: 'displayTrue',
      newPetFound: 'displayNone'
    }
  }

  props.setAlerts(alertData)
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

  setTimeout(() => {
    clearAlert(props)
    clearForm(props)
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

class ContactUs extends React.Component {
  constructor (props) {
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleName (event) {
    this.props.setContactUsName(event.target.value)
  }
  handleEmail (event) {
    this.props.setContactUsEmail(event.target.value)
  }
  handleMessage (event) {
    this.props.setContactUsMessage(event.target.value)
  }
  handleSubmit (event) {
    const headers = { 'Content-Type': 'application/json' }
    const props = this.props

    const contactUsDecoreted = {
      name: props.name,
      email: props.email,
      details: props.message
    }

    fetch('https://items-api.herokuapp.com/api/contact_us', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ contact_us: contactUsDecoreted })
    }).then(function (response) {
      showSuccesfullMessage(props)
      console.log(response)
    }).catch(function (err) {
      showUnSuccesfullMessage(props, err)
      console.log(err)
    })

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
            <div className='w3-section w3-center w3-opacity'>
              <i className='fa fa-map-marker fa-fw w3-xxlarge w3-margin' /> Las Palmas de Gran Canaria, España
              <i className='fa fa-phone fa-fw w3-xxlarge w3-margin' /> Teléfono: +00 151515
              <i className='fa fa-envelope fa-fw w3-xxlarge w3-margin' /> Email: mylostpet@mail.com
            </div>
            <form onSubmit={this.handleSubmit}>
              <p><input value={this.props.name} onChange={this.handleName} className='w3-input w3-border' type='text' placeholder='Nombre' required /></p>
              <p><input value={this.props.email} onChange={this.handleEmail} className='w3-input w3-border' type='email' placeholder='e-mail' required /></p>
              <p><textarea value={this.props.message} onChange={this.handleMessage} className='w3-input w3-border' placeholder='Describenos la informacion que necesitas' required/></p>
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
