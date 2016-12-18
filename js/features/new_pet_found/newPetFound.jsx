const React = require('react')
const { connector } = require('../../Store')

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
    this.handlePetImage = this.handlePetImage.bind(this)
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
  handlePetImage (event) {
    this.props.setPetImage(event.target.value)
  }
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title w3-center">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
            Introduce datos de la mascota y los datos necesarios para poder contactar contigo</a>
          </h4>
        </div>
        <div id="collapse1" className="panel-collapse collapse">
          <div className="panel-body w3-margin">
            <form onSubmit={this.handleSubmit}>
              <p><input value={this.props.pet.founderName} onChange={this.handleFounderName} className='w3-input w3-border' type='text' placeholder='Nombre' /></p>
              <p><input value={this.props.pet.founderEmail} onChange={this.handleFounderEmail} className='w3-input w3-border' type='email' placeholder='e-mail' /></p>
              <p><input value={this.props.pet.petType} onChange={this.handlePetType} className='w3-input w3-border' type='text' placeholder='Typo de mascota (perro/gato ...)' /></p>
              <p><input value={this.props.pet.size} onChange={this.handlePetSize} className='w3-input w3-border' type='text' placeholder='Tamano (grande/mediano/pequeno)' /></p>
              <p><input value={this.props.pet.foundDate} onChange={this.handleFoundDate} className='w3-input w3-border' type='date' placeholder='fecha (25-08-2016)' /></p>
              <p><input value={this.props.pet.location} onChange={this.handlePetLocation} className='w3-input w3-border' type='text' placeholder='Encontrada en ciudad, localidad' /></p>
              <p><textarea value={this.props.pet.description} onChange={this.handlePetDescription} className='w3-input w3-border' placeholder='Imformacion sobre la mascota' /></p>
              <input value={this.props.pet.petImage} onChange={this.handlePetImage} className='file-input w3-padding w3-white w3-border' type='file' name='Anadir foto' />
              <p><button className='w3-btn-block w3-padding w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' /> SEND MESSAGE</button></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const { object, func } = React.PropTypes

NewPetFound.propTypes = {
  pet: object,
  setPetFounderName: func,
  setPetFounderEmail: func,
  setPetType: func,
  setPetSize: func,
  setPetFoundDate: func,
  setPetLocation: func,
  setPetDescription: func,
  setPetImage: func
}

module.exports = connector(NewPetFound)
