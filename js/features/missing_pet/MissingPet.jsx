const React = require('react')
const { Link } = require('react-router')

var displayLeft = "displayNone"
var displayRight = "displayNone"

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}


class MissingPet extends React.Component {
  constructor (props) {
    super(props)
    this.addPanel = this.addPanel.bind(this)
    this.hideArrow = this.hideArrow.bind(this)
    this.getTargetId = this.getTargetId.bind(this)
  }

  addPanel () {
    if (parseInt(this.props.id) % 2 === 0) {
      return (
        <div id={this.props.id} className='collapse contact-details-panel'>
          <div className={`arrow-up-left ${displayLeft}`}></div>
          <div className={`arrow-up-right ${displayRight}`}></div>
          <div className='w3-white w3-margin'>
            <div className='w3-container w3-padding w3-opacity'>
              <h2>Introduce tus datos de contacto</h2>
            </div>
            <div className='w3-container w3-white'>
              <p className='form-introduction w3-opacity'>Introduce tus datos para poder ponerte en contacto con la persona que esta a cargo de tu mascota.</p>
            </div>
          </div>
        </div>
      )
    }
  }

  hideArrow (event) {
    if (parseInt(this.props.id) % 2 === 0) {
      displayLeft = "displayNone"
      displayRight = "displayTrue"
    } else {
      displayRight = "displayNone"
      displayLeft = "displayTrue"
    }

    event.preventDefault()
  }

  getTargetId () {
    if (parseInt(this.props.id) % 2 === 0) {
      return this.props.id
    } else {
      return parseInt(this.props.id) + 1
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
            <h4 className='w3-opacity'>{this.props.pet}, {this.props.breading}, {this.props.size}</h4>
            <p className='w3-opacity'>{this.props.description}</p>
            <form onSubmit={this.hideArrow}>
              <button data-toggle='collapse' data-target={`#${this.getTargetId()}`} className='w3-btn w3-border w3-grey w3-opacity w3-hover-opacity-off'>
                <b>Contactar</b>
              </button>
            </form>
            <p className='w3-clear' />
          </div>
        </div>
        {this.addPanel()}
      </div>
    )
  }
}

const { string, arrayOf, object, func } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  pet: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  id: string.isRequired
}

module.exports = MissingPet
