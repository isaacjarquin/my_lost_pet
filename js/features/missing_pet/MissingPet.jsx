const React = require('react')
const { connector } = require('../../Store')
var MediaQuery = require('react-responsive')
const ContactDetailsPanel = require('../panels/ContactDetailsPanel')
const $ = require('jquery')

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

class MissingPet extends React.Component {
  constructor (props) {
    super(props)

    this.addPanelsForNonMobileDevices = this.addPanelsForNonMobileDevices.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick (event) {
    const petId = 'item-' + this.props.id
    const selectedId = '#' + petId

    if ($(selectedId).hasClass('panel-opened')) {
      $('.col-sm-5').removeClass('addOpacity')
      $('.col-sm-5').removeClass('panel-opened')
    } else {
      if (parseInt(this.props.id) % 2 === 0) {
        $('.arrow-up').addClass('arrow-up-right')
        $('.arrow-up').removeClass('arrow-up-left')
      } else {
        $('.arrow-up').addClass('arrow-up-left')
        $('.arrow-up').removeClass('arrow-up-right')
      }

      $.each($('.pets-row'), function (pet) {
        if (petId !== pet.id) {
          $('.col-sm-5').addClass('addOpacity panel-opened')
          $(selectedId).removeClass('addOpacity')
        }
      })
    }

    event.preventDefault()
  }

  render () {
    return (
      <div>
        <div id={`item-${this.props.id}`} className='panel col-sm-5 w3-white w3-margin'>
          <div className='panel-image'>
            <img src={this.props.image} className='img-responsive' alt='Image' />
          </div>
          <div className='panel-description w3-container w3-light-grey'>
            <h4 className='panel-description_title w3-opacity'>{this.props.pet.petType}, {this.props.breading}, {this.props.size}</h4>
            <p className='panel-description_content w3-opacity'>{this.props.description}</p>
            <div className='panel-description_iteraction'>
              <a className='more-info w3-opacity'>mas informacion</a>
              <form onSubmit={this.handleClick}>
                <button data-toggle='collapse' data-target={`#${this.props.id}`} className='contact-btn w3-btn w3-border w3-grey w3-opacity w3-hover-opacity-off'>
                  <b>Contactar</b>
                </button>
              </form>
            </div>
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

const { string, object } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  pet: object,
  description: string.isRequired,
  image: string.isRequired,
  id: string.isRequired
}

module.exports = connector(MissingPet)
