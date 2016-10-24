const React = require('react')

class PetDetails extends React.Component {

  render () {
    const params = this.props.params || {}
    const { pet, breading, size, description } = params
    return (
      <div className="container">
        <div className="pet-info">
          <h1 className="pet-title-description">{pet}, {breading}, {size} </h1>
          <img className="pet-image" src="#" />
          <div className="pet-description">{description}</div>
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

PetDetails.propTypes = {
  params: object.isRequired
}

module.exports = PetDetails
