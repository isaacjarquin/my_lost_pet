const React = require('react')
const { Link } = require('react-router')

if (process.env.WEBPACK_BUILD) {
    require('./MissingPet.scss');
}

const MissingPet = (props) => (
  <Link to={`/details/${props.id}`}>
    <div className='pet'>
      <div src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"></div>
      <div>{props.pet}, {props.breading}, {props.size}</div>
      <div>Card subtitle</div>
      <div>{props.description}</div>

    </div>
  </Link>
)

const { string } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  pet: string.isRequired,
  description: string.isRequired,
  id: string.isRequired
}

module.exports = MissingPet
