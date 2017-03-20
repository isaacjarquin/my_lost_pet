const React = require('react')
const { connector } = require('../../Store')

class ContactDetailsPanel extends React.Component {
  constructor (props) {
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.sendOwnersDetails()
    event.preventDefault()
  }

  render () {
    return (
      <div id={this.props.id} className='collapse contact-details-panel'>
        <div className={this.props.arrow} />
        <div className='w3-margin'>
          <div className='w3-container w3-padding w3-opacity'>
            <h2>Introduce tus datos de contacto</h2>
          </div>
          <div className='w3-container'>
            <p className='form-introduction w3-opacity'>Introduce tus datos para poder ponerte en contacto con la persona que esta a cargo de tu mascota.</p>
            <form onSubmit={this.handleSubmit}>
              <p><input value={this.props.owner.name} onChange={this.handleName} className='w3-input w3-border' type='text' placeholder='Nombre' /></p>
              <p><input value={this.props.owner.email} onChange={this.handleEmail} className='w3-input w3-border' type='email' placeholder='e-mail' /></p>
              <p><input value={this.props.owner.phoneNumber} onChange={this.handlePhoneNumber} className='w3-input w3-border' type='text' placeholder='Numero de telefono' /></p>
              <p><textarea value={this.props.owner.description} onChange={this.handleDescription} className='w3-input w3-border' placeholder='Información personal' /></p>
              <p><button className='w3-btn-block w3-padding-12 w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' /> Enviar mis datos</button></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const { string, object, func } = React.PropTypes

ContactDetailsPanel.propTypes = {
  id: string.isRequired,
  owner: object,
  setOwnerName: func,
  setOwnerEmail: func,
  setOwnerPhoneNumber: func,
  setDescription: func,
  sendOwnersDetails: func
}

module.exports = connector(ContactDetailsPanel)
