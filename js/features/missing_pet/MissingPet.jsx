const React = require('react')
const ResponsiveImage = require('../responsive_image/ResponsiveImage')
const $ = require('jquery')

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

class MissingPet extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.renderPetCard = this.renderPetCard.bind(this)
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
      $('.pet-type').removeClass('disable-selector')
      $('.pet-location').removeClass('disable-input')
    } else {
      $('.contact-btn').attr('disabled', 'disabled')
      $('.more-info_link').addClass('disable-link')
      $('.pet-type').addClass('disable-selector')
      $('.pet-location').addClass('disable-input')

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

  renderPetCard () {
    if (this.props.id !== undefined) {
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
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
  render () {
    return (this.renderPetCard())
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
  colSizeClass: string.isRequired,
  petType: string.isRequired,
  imageUrl: string.isRequired,
  id: string.isRequired
}

module.exports = MissingPet
