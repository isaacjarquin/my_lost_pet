const React = require('react')

const MissingPet = (props) => (
  <div className='pet'>
    <img src='#' className='pet-img' />
    <div className='pet-content'>
      <h3 className='pet-tipe'>
        {props.pet.pet}, {props.pet.breading}, {props.pet.size}
      </h3>
      <p className='pet-description'> {props.pet.description} </p>
    </div>
  </div>
)

module.exports = MissingPet
