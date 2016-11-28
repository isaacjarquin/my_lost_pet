const React = require('react')
const { Link } = require('react-router')

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

const MissingPet = (props) => (
  <Link to={`/details/${props.id}`}>
    <div className='panel col-sm-5 w3-white'>
      <div className='panel-image'>
        <img src={props.image} className='img-responsive' alt='Image' />
      </div>
      <div className='panel-description w3-container w3-light-grey'>
        <h4>{props.pet}, {props.breading}, {props.size}</h4>
        <p>{props.description}</p>
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
