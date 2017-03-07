const React = require('react')
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
      $('.contact-btn').removeAttr('disabled')
      $('.more-info_link').removeClass('disable-link')
    } else {
      $('.contact-btn').attr('disabled', 'disabled')
      $('.more-info_link').addClass('disable-link')

      if (parseInt(this.props.id) % 2 === 0) {
        $('.arrow-up').addClass('arrow-up-right')
        $('.arrow-up').removeClass('arrow-up-left')
      } else {
        $('.arrow-up').addClass('arrow-up-left')
        $('.arrow-up').removeClass('arrow-up-right')
      }

      $.each($('.pets-row'), function (pet) {
        if (petId !== pet.id) {
          const buttonSelector = `#${petId} .contact-btn`
          const linkSelector = `#${petId} .more-info_link`

          $(buttonSelector).removeAttr('disabled')
          $(linkSelector).removeClass('disable-link')
          $('.col-sm-5').addClass('addOpacity panel-opened')
          $(selectedId).removeClass('addOpacity')
        }
      })
    }

    event.preventDefault()
  }

  displayExtraTextLink () {
    if (this.props.showExtraInfo) {
      return (
        <a data-toggle='collapse' data-target={`#more-info-${this.props.id}`} className='more-info_link w3-opacity'>mas informacion</a>
      )
    } else {
      return ''
    }
  }

  displayDescription () {
    if (this.props.showExtraInfo) {
      return (
        <div className='extra-description-block'>
          <p className='panel-description_content w3-opacity'>{this.props.extraDescription}</p>
          <div id={`more-info-${this.props.id}`} className='more-info-extra w3-opacity collapse'>{this.props.extraDescriptionHidden}</div>
        </div>
      )
    } else {
      return (<p className='panel-description_content w3-opacity'>{this.props.description}</p>)
    }
  }

  render () {
    return (
      <div>
        <div id={`item-${this.props.id}`} className='panel col-sm-5 w3-white w3-margin'>
          <div className='panel-date w3-center'>{this.props.breading}, {this.props.size}</div>
          <div className='panel-image'>
            <img src={this.props.image} className='img-responsive' alt='Image' />
          </div>
          <div className='panel-description w3-container w3-light-grey'>
            <p className='panel-description_title w3-opacity'>Encontrado en {this.props.city}, {this.props.location}</p>
            {this.displayDescription()}
            <div id={`more-info-${this.props.id}`} className='more-info-extra w3-opacity collapse'>{this.props.extraDescription}</div>
            <div className='panel-description_iteraction'>
              {this.displayExtraTextLink()}
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

const { string, bool } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  city: string.isRequired,
  showExtraInfo: bool.isRequired,
  location: string.isRequired,
  size: string.isRequired,
  description: string.isRequired,
  extraDescription: string.isRequired,
  extraDescriptionHidden: string.isRequired,
  image: string.isRequired,
  id: string.isRequired
}

module.exports = MissingPet
