const React = require('react')
const { Link } = require('react-router')

if (process.env.WEBPACK_BUILD) {
  require('./missingPet.scss')
}

const MissingPet = (props) => (
  <Link to={`/details/${props.id}`}>
    <div className='col-sm-4'>
      <div className='pet panel panel-primary'>
        <div className='panel-heading'>{props.pet}, {props.breading}, {props.size}</div>
        <div className='panel-body'>
          <img src={props.image} className='img-responsive' alt='Image' />
        </div>
        <div className='panel-footer'>{props.description}</div>
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
