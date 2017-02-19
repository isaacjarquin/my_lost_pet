const React = require('react')
const { connector } = require('../../Store')
var MediaQuery = require('react-responsive');
const ContactDetailsPanel = require('../panels/ContactDetailsPanel')

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

class MissingPet extends React.Component {
  constructor (props) {
    super(props)

    this.addPanelsForNonMobileDevices = this.addPanelsForNonMobileDevices.bind(this)
  }

  addPanelsForNonMobileDevices () {
    if (parseInt(this.props.id) % 2 === 0) {
      return (
        <div>
          <ContactDetailsPanel id={this.props.id - 1} />
          <ContactDetailsPanel id={this.props.id} />
        </div>
      )
    }
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
            <ContactDetailsPanel id={this.props.id} />
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
  pet: object,
  description: string.isRequired,
  image: string.isRequired,
  id: string.isRequired,
}

module.exports = connector(MissingPet)
