const React = require('react')
const { connector } = require('../../Store')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

class PetDetails extends React.Component {
  assignPet (id) {
    const petArray = this.props.pets.filter((pet) => pet.id === id)
    return petArray[0]
  }
  render () {
    const { pet, breading, size, description } = this.assignPet(this.props.params.id)
    return (
      <div className='container'>
        <div className='pet-info'>
          <h1 className='pet-title-description'>{pet}, {breading}, {size} </h1>
          <img className='pet-image' src='#' />
          <div className='pet-description'>{description}</div>
        </div>
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

PetDetails.propTypes = {
  pets: arrayOf(object).isRequired,
  params: object
}

module.exports = connector(PetDetails)
