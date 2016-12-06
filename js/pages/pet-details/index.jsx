const React = require('react')
const { connector } = require('../../Store')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

class PetDetails extends React.Component {
  constructor (props) {
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  assignPet (id) {
    const petArray = this.props.pets.filter((pet) => pet.id === id)
    return petArray[0]
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
    const { pet, breading, size, description, image, date, titleDescription } = this.assignPet(this.props.params.id)
    return (
      <div className='container'>
        <div className='pet-info'>
          <div className='pet-card w3-container w3-white w3-margin w3-padding-large'>
            <div className='pet-card_title w3-center w3-opacity'>
              <h3>{pet}, {breading}, {size}</h3>
              <h5>{titleDescription}, <span>{date}</span></h5>
            </div>

            <div className='pet-card_body w3-justify'>
              <img src={image} alt='Men in Hats' className='w3-padding-12' />
              <p className='w3-opacity'>{description}</p>
              <p className='w3-right'>
                <button data-toggle='collapse' data-target='#response-form' className='w3-btn w3-border w3-grey w3-opacity w3-hover-opacity-off'>
                  <b>Responder</b>
                </button>
              </p>
              <p className='w3-clear' />
            </div>
            <div id='response-form' className='collapse'>
              <hr className='w3-grey' />
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
        </div>
      </div>
    )
  }
}

const { arrayOf, object, func } = React.PropTypes

PetDetails.propTypes = {
  pets: arrayOf(object).isRequired,
  params: object,
  owner: object,
  setOwnerName: func,
  setOwnerEmail: func,
  setOwnerPhoneNumber: func,
  setDescription: func,
  sendOwnersDetails: func
}

module.exports = connector(PetDetails)
