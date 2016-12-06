const React = require('react')
const { connector } = require('../../Store')

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
    this.props.sendContactUsDetails()
    event.preventDefault()
  }
  render () {
    return (
      <div>
        <h2 className='w3-center w3-opacity'>Contacto</h2>
        <div className='w3-section w3-center w3-opacity'>
          <i className='fa fa-map-marker fa-fw w3-xxlarge w3-margin' /> Las Palmas de Gran Canaria, España
          <i className='fa fa-phone fa-fw w3-xxlarge w3-margin' /> Teléfono: +00 151515
          <i className='fa fa-envelope fa-fw w3-xxlarge w3-margin' /> Email: mylostpet@mail.com
        </div>
        <form onSubmit={this.handleSubmit}>
          <p><input value={this.props.contactUs.name} onChange={this.handleName} className='w3-input w3-border' type='text' placeholder='Nombre' /></p>
          <p><input value={this.props.contactUs.email} onChange={this.handleEmail} className='w3-input w3-border' type='email' placeholder='e-mail' /></p>
          <p><textarea value={this.props.contactUs.message} onChange={this.handleMessage} className='w3-input w3-border' placeholder='Imformacion sobre la mascota' /></p>
          <button type='submit' className='w3-btn-block w3-padding-12 w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' /> Enviar mensaje</button>
        </form>
      </div>
    )
  }
}

const { object, func } = React.PropTypes

ContactUs.propTypes = {
  contactUs: object,
  setContactUsName: func,
  setContactUsEmail: func,
  setContactUsMessage: func,
  sendContactUsDetails: func
}

module.exports = connector(ContactUs)
