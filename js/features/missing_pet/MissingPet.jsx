const React = require('react')
const { Link } = require('react-router')

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

const MissingPet = (props) => (
  <Link to={`/details/${props.id}`}>
    <div className='panel col-sm-4 w3-white w3-padding'>
      <div className='panel-image w3-padding'>
        <img src={props.image} className='img-responsive' alt='Image' />
      </div>
      <div className='panel-description w3-container w3-light-grey'>
        <h4 className='w3-opacity'>{props.pet}, {props.breading}, {props.size}</h4>
        <p className='w3-opacity'>{props.description}</p>
      </div>
    </div>
  </Link>
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
