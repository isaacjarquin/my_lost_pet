const React = require('react')
var MediaQuery = require('react-responsive')
const ContactDetailsPanel = require('../panels/ContactDetailsPanel')
const ResponsiveImage = require('../responsive_image/ResponsiveImage')
const $ = require('jquery')

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

class MissingPet extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    const colSizeClass = '.' + this.props.colSizeClass
    const petId = 'item-' + this.props.id
    const selectedId = '#' + petId

    if ($(selectedId).hasClass('panel-opened')) {
      $(colSizeClass).removeClass('addOpacity')
      $(colSizeClass).removeClass('panel-opened')
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
          $(colSizeClass).addClass('addOpacity panel-opened')
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
      <div className='missing-pet-card'>
        <div id={`item-${this.props.id}`} className={`panel ${this.props.colSizeClass} w3-white w3-margin`}>
          <div className='panel-date w3-center'>{this.props.petType}, {this.props.size}</div>
          <ResponsiveImage url={this.props.imageUrl} className={'panel-image'} />
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
        <ContactDetailsPanel id={this.props.id} />
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
