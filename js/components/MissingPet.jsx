const React = require('react')

const MissingPet = (props) => (
  <div className='pet'>
    <img src='#' className='pet-img' />
    <div className='pet-content'>
      <h3 className='pet-tipe'>
        {props.pet}, {props.breading}, {props.size}
      </h3>
      <p className='pet-description'> {props.description} </p>
    </div>
  </div>
)

const { string } = React.PropTypes

MissingPet.propTypes = {
  breading: string.isRequired,
  size: string.isRequired,
  pet: string.isRequired,
  description: string.isRequired
}

module.exports = MissingPet
