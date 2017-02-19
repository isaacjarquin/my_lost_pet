const React = require('react')
const { connector } = require('../../Store')
var MediaQuery = require('react-responsive');

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

class MissingPet extends React.Component {
  constructor (props) {
    super(props)
    this.addPanelsForNonMobileDevices = this.addPanelsForNonMobileDevices.bind(this)
    this.addPanelForMobileDevices = this.addPanelForMobileDevices.bind(this)
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

  addPanelsForNonMobileDevices () {
    if (parseInt(this.props.id) % 2 === 0) {
      return (
        <div>
          <div id={this.props.id - 1} className='collapse contact-details-panel'>
            <div className='arrow-up-left'></div>
            <div className='w3-white w3-margin'>
              <div className='w3-container w3-padding w3-opacity'>
                <h2>Introduce tus datos de contacto</h2>
              </div>
              <div className='w3-container w3-white'>
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
          <div id={this.props.id} className='collapse contact-details-panel'>
            <div className='arrow-up-right'></div>
            <div className='w3-white w3-margin'>
              <div className='w3-container w3-padding w3-opacity'>
                <h2>Introduce tus datos de contacto</h2>
              </div>
              <div className='w3-container w3-white'>
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
        </div>
      )
    }
  }

  addPanelForMobileDevices () {
    return (
      <div id={this.props.id} className='collapse contact-details-panel'>
        <div className='arrow-up-right'></div>
        <div className='w3-white w3-margin'>
          <div className='w3-container w3-padding w3-opacity'>
            <h2>Introduce tus datos de contacto</h2>
          </div>
          <div className='w3-container w3-white'>
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

  render () {
    return (
      <div>
        <div className='panel col-sm-5 w3-white w3-margin'>
          <div className='panel-image'>
            <img src={this.props.image} className='img-responsive' alt='Image' />
          </div>
          <div className='panel-description w3-container w3-light-grey'>
            <h4 className='w3-opacity'>{this.props.pet.petType}, {this.props.breading}, {this.props.size}</h4>
            <p className='w3-opacity'>{this.props.description}</p>
            <button data-toggle='collapse' data-target={`#${this.props.id}`} className='w3-btn w3-border w3-grey w3-opacity w3-hover-opacity-off'>
              <b>Contactar</b>
            </button>
            <p className='w3-clear' />
          </div>
        </div>
         <MediaQuery query='(max-device-width: 600px)'>
            {this.addPanelForMobileDevices()}
         </MediaQuery>
         <MediaQuery query='(min-device-width: 700px)'>
            {this.addPanelsForNonMobileDevices()}
         </MediaQuery>
      </div>
    )
  }
}

const { string, object, func } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  setDisplayLeftArrow: func,
  setDisplayRightArrow: func,
  arrows: object,
  pet: object,
  setDisplayArrow: func,
  description: string.isRequired,
  image: string.isRequired,
  id: string.isRequired,
  owner: object,
  setOwnerName: func,
  setOwnerEmail: func,
  setOwnerPhoneNumber: func,
  setDescription: func,
  sendOwnersDetails: func
}

module.exports = connector(MissingPet)
