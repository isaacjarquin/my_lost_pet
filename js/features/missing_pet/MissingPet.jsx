const React = require('react')
const { Link } = require('react-router')

var displayLeft = ""
var displayRight = ""

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

const hideArrow = (petId) => {
    if (parseInt(petId) % 2 === 0) {
      displayLeft = "displayNone"
    } else {
      displayRight = "displayNone"
    }
}

const MissingPet = (props) => (
  <div>
    <div className='panel col-sm-5 w3-white w3-margin'>
      <div className='panel-image'>
        <img src={props.image} className='img-responsive' alt='Image' />
      </div>
      <div className='panel-description w3-container w3-light-grey'>
        <h4 className='w3-opacity'>{props.pet}, {props.breading}, {props.size}</h4>
        <p className='w3-opacity'>{props.description}</p>
        <p className='w3-right'>
          <button onSubmit={hideArrow(props.id)}data-toggle='collapse' data-target={`#${props.id}`} className='w3-btn w3-border w3-grey w3-opacity w3-hover-opacity-off'>
            <b>Contactar</b>
          </button>
        </p>
        <p className='w3-clear' />
      </div>
    </div>
    <div id={props.id} className='collapse contact-details-panel'>
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
  </div>
)

const { string } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  pet: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  id: string.isRequired
}

module.exports = MissingPet
